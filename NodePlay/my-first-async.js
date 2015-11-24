var fs = require('fs')
var lines = undefined;
var path = process.argv[2];


function countFileLines(callback){
  fs.readFile(path, 'utf8', function doneReading(err, fileContents){
    lines = fileContents.toString().split('\n').length-1
    callback()
  })
}

function printLines(){
  console.log(lines);
}

countFileLines(printLines)
