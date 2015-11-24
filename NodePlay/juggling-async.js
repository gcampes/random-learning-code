var http = require('http');
var url = [];
var resultados = [];

url = process.argv.slice(2);

for(i=0;i<url.length;i++){
  (function(i){
  http.get(url[i], function callback(response){
    var resultado = "";

    response.on("data", function receive(data){
      response.setEncoding('utf8');
      resultado += data;
    });

    response.on("end", function concatenate(){
      resultados[i] = resultado;
      var count = 0;
      for(j=0;j<resultados.length;j++){
        if(resultados[j] != null)
          count++;
      }

      if(resultados.length == count){
        for (j = 0; j < resultados.length; j++) {
            console.log(resultados[j]);
          }
      }
    });
  });
})(i)

}
