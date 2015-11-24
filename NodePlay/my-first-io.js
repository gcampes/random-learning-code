var path = process.argv[2];
var fs = require('fs');
console.log(fs.readFileSync(path).toString().split('\n').length-1);
