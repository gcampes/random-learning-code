$(document).ready(function(){
  //Verify if path exists

  $('input').on('propertychange change click keyup input paste', function(){
    validate(this);
  });

  function validate(element){
    var fs = require('fs');
    path = element.value;


    fs.lstat(path, function(err, stats){
      if(err){
        $(element).addClass('invalidated');
        $(element).removeClass('validated');
      }
      else{
        $(element).addClass('validated');
        $(element).removeClass('invalidated');
      }
    })
  }
});
