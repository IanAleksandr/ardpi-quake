var http = require ("http");
var url = require ("url");


function iniciar (route,handle)
{
	//funcion que se activa cada vez que se realiza una peticion
	function onRequest(request,response)
	{
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Peticion para " + pathname + " recibida.");

		//la codificacion de la informacion recibida sera UTF8
		request.setEncoding("utf8");

		/*
		request.addListener("data", function(chunk) {
    		// funcion llamada cuando un nuevo trozo (chunk) 
    		// de informacion (data) es recibido.
		});
		*/
		request.addListener("data", function(chunk)
		{
			postData = postData + chunk;
			console.log("Recibido trozo POST '" + chunk + "'.");

		});

		/*
		request.addListener("end", function() {
    		// funcion llamada cuando todos los trozos (chunks) 
    		// de informacion (data) han sido recibidos.
		}); 
		*/
		//llamamos al router una vez que toda la inf haya sido recibida
		request.addListener("end", function()
		{
			route(handle, pathname, response, postData);
		});

		//se llama a funcion route para indicar qué debe hacerse
		//route(handle,pathname,response);//-->devuelve un string;
		
	}

	//El servidor se crea una sola vez.
	http.createServer(onRequest).listen(8888);
	console.log("Servidor Inicado.");
}

exports.iniciar = iniciar;