module.exports = function(path, extension, callback){
  var fs = require('fs');
  var ext = require('path');
  var endList = [];
  extension = "." + extension;
  fs.readdir(path, function cb(err, list){
    if(err)
      return callback(err);
    else {
      for(i=0;i<list.length;i++)
        if(ext.extname(list[i]) == extension)
          endList.push(list[i]);
      callback(null, endList);
    }
  });
}
