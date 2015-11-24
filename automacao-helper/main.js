//electron-packager ../helper-automacao Automacao --platform=all --arch=all --version=0.32.2

var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var ipc = require('ipc'); // Communication module.
var fs = require('fs');
var fileDatabase = app.getPath('appData')+'/Automacao/config-database.json';
var fileFolder = app.getPath('appData')+'/Automacao/config-folder.json';

var createConfigFile = function(){
  contentsFolder = '\
    {\n\
      "source": "\\\\\\\\srvCentrisTeste\\\\www\\\\ERP\\\\CentrisERP",\n\
      "target": "C:\\\\inetpub\\\\wwwroot\\\\CentrisAutoDesenv",\n\
      "backup": "C:\\\\inetpub\\\\wwwroot\\\\Centris Backup"\n\
    }\n';
  contentsDatabase = '\
  {\n\
    "instance": "localhost\\\\sql2012",\n\
    "database": "DatabaseName",\n\
    "user": "login",\n\
    "password" : "password",\n\
    "scripts" : "C:\\\\Projetos\\\\Source\\\\dbms\\\\SQLServer"\n\
  }'

  fs.exists(fileDatabase, function(exists){
    if(exists)
      console.log('existe');
    else{
      console.log('não existe');
      fs.writeFile(fileDatabase, contentsDatabase, function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("The file was saved!");
      });
    }
  })

  fs.exists(fileFolder, function(exists){
    if(exists)
      console.log('existe');
    else{
      console.log('não existe');
      fs.writeFile(fileFolder, contentsFolder, function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("The file was saved!");
      });
    }
  })
}


// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.

  //deploy
  mainWindow = new BrowserWindow({width: 630, height: 210, resizable: false, frame: false, transparent: true});

  //debug
  // mainWindow = new BrowserWindow({width: 900, height: 700, resizable: false, frame: false});

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/html/index.html');

  // Open the devtools.
  // mainWindow.openDevTools();
  createConfigFile();
  ipc.on('asynchronous-message', function(event, arg) {
    console.log(arg);
    if(arg == 'configfile-database'){
      fs.readFile(fileDatabase, 'utf8', function (err, data) {
        if (err)
          console.log(err);
        else{
          event.sender.send('asynchronous-reply', data);
          console.log('123');
        }
      });
    }

    else if(arg == 'configfile-folder'){
      fs.readFile(fileFolder, 'utf8', function (err, data) {
        if (err)
          console.log(err);
        else{
          event.sender.send('asynchronous-reply', data);
          console.log('123');
        }
      });
    }

    else if(arg == 'path'){
      event.sender.send('asynchronous-reply', app.getPath('appData'));
    }

    else{
      mainWindow.loadUrl('file://' + __dirname + '/html/'+arg+'.html');
    }
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
