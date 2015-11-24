var ws = require("nodejs-websocket");
var http = require("http");
var fs = require('fs');

var counter = 0;

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
      if(str == 'click')
        counter++;
      broadcast(numberWithCommas(counter));
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed...")
    })
}).listen(8001)


function broadcast(counter) {
	socketServer.connections.forEach(function (connection) {
		connection.sendText(counter);
	})
}


//Helpers
function numberWithCommas(x) {
    return x.noExponents().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

Number.prototype.noExponents = function(){
    var data= String(this).split(/[eE]/);
    if(data.length== 1) return data[0];

    var  z= '', sign= this<0? '-':'',
    str= data[0].replace('.', ''),
    mag= Number(data[1])+ 1;

    if(mag<0){
        z= sign + '0.';
        while(mag++) z += '0';
        return z + str.replace(/^\-/,'');
    }
    mag -= str.length;
    while(mag--) z += '0';
    return str + z;
}
