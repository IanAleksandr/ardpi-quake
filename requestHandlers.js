var exec = require("child_process").exec;
var querystring = require ("querystring");

function iniciar(response,postData)
{
	console.log("Manipulador de peticion 'iniciar' ha sido llamado.");
	
	exec ("dir",function(error,stdout,stderr)
	{
		//le da el tipo de formato de salida a la respuesta
		//response.writeHead(200,{"Content-Type":"text/html"});
		response.write(stdout);
		response.end();
	});
}

function subir(response,postData)
{
	console.log("Manipulador de peticion 'subir' ha sido llamado.");
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("Hola Subir !");
	response.end();
}

function subirPost(response,postData)
{
	console.log("Manipulador de peticiones 'subirPost' fue llamado.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html'+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
exports.subirPost = subirPost;