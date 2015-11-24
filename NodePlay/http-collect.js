var url = process.argv[2];
var bl = require('bl');

var http = require('http');
http.get(url, function callback(response){
  response.pipe(bl(function getStream(err, data){
    console.log(data.toString().length); 
    console.log(data.toString());
  }))
});
