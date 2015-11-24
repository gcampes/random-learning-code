var fs = require('fs');

var changePage = function(page){
  var ipc = require('ipc');
  ipc.send('asynchronous-message', page);
}

var fillForm = function(form){
  for (var key in form) {
    if (form.hasOwnProperty(key)) {
      $('[name='+key+']').val(form[key]);
    }
  }
}

var saveFile = function(file){
  content = JSON.stringify($('form').serializeObject());
  var ipc = require('ipc');
  ipc.send('asynchronous-message', 'path');
  ipc.on('asynchronous-reply', function(arg) {
    fs.writeFile(arg+'/Automacao/'+file, content, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
  });
}

var isJsonString = function(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


module.exports.changePage = changePage;
module.exports.fillForm = fillForm;
module.exports.saveFile = saveFile;
module.exports.isJsonString = isJsonString;


$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(function() {
    $('form').submit(function() {
        $('#result').text(JSON.stringify($('form').serializeObject()));
        return false;
    });
});
