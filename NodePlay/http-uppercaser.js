var http = require('http');
var map = require('through2-map');

 var uc = map( function callback(data){ return data.toString().toUpperCase(); })

var server = http.createServer(function callback(request, response){
  if(request.method == 'POST')
  request.pipe(uc).pipe(response);
})
server.listen(process.argv[2]);
