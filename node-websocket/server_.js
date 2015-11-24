var ws = require("nodejs-websocket");
var http = require("http");
var fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8000);
});


var socketServer = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text", function (str) {
        console.log(str);
        broadcast(str.toUpperCase());
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed...")
    })
}).listen(8001)


function broadcast(str) {
	socketServer.connections.forEach(function (connection) {
		connection.sendText(str)
	})
}
