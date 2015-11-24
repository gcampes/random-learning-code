var dir = process.argv[2];
var extension = process.argv[3];
var fs = require('fs');
var fileList = undefined;
var path = require('path');

fs.readdir(dir, function func(err, list){
  for(i=0;i<list.length;i++)
    if(path.extname(list[i]).indexOf(extension) != -1)
      console.log(list[i])
})
