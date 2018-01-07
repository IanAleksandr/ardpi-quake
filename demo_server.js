//SERVIDOR HTTP minimalista =)
//---------------------------------------------------------
var http = require("http");

http.createServer(function(request,response)
{
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("Hola Mundo");
	response.end();
}).listen(8888);

console.log('el servidor ya funciona');
//---------------------------------------------------------

var http = require("http");

function onRequest(request,response)
{
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("Hola Mundo");
	response.end();
}

http.createServer(onRequest).listen(8888);

//---------------------------------------------------------

//(fun (x,y){do a}).listen('puerto');

//--podemos pasar funciones del siguiente modo

function decir (palabra)
{
	console.log(palabra);
}

function ejecutar (algunafuncion,valor)
{
	algunafuncion(valor);
}

ejecutar(decir,"Hola");

// Ahora, tambien podemos pasar una funcion sin darle nombre
// en este caso pasamor la funcion "decir" sin definirla antes

function ejecutar (algunafuncion,valor)
{
	algunafuncion(valor);
}

ejecutar(function(palabra)
{
	console.log(palabra);
},"Hola");
