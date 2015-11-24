var ws = require('nodejs-websocket');

var server = ws.createServer(function(connection){
  conn.on("text", function(str){
    console.log('Received : '+ str);
    conn.send(str.toUpperCase());
  })
  conn.on("close", function(code, reason){
    console.log("connection closed...")
  })
}).listen(8001);
