var dirModule = require('./make-it-modular.js');

var path = process.argv[2];
var extension = process.argv[3];
dirModule(path, extension, function callback(err, list){
  list.forEach(function(entry){
    console.log(entry);
  })
});
