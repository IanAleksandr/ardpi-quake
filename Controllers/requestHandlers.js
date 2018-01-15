var exec = require("child_process").exec;
var querystring = require ("querystring");
var fs = require("fs");//FileStream (para leer archivos estaticos-html)

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
    //postData = Body de la peticion Post
	response.write("Tu enviaste el texto: "+ querystring.parse(postData)["text"]);
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
    //form action es la url a donde se despliega el metodo post
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

function verHtml(response,postData)
{
    console.log("Manipulador de peticion 'verHtml' ha sido llamado.");
    //leemos la pagina html ( se manda toda la pag a memoria)
    fs.readFile('./Views/vistaHtml.html',function (err, data)
    {
        response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        response.write(data);
        response.end();
    });
}

function verPipeHtml(response,postData)
{
    console.log("Manipulador de peticion 'verPipeHtml' ha sido llamado.");
    //leemos la pagina html usando el metodo pipe sin mandar toda la pag a memoria
    
    response.writeHead(200, {'Content-Type': 'text/html'});
    var file = fs.createReadStream('./Views/vistaHtml.html');
    file.pipe(response);
    // no se pone end ya que es un pipe 
    //response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
exports.subirPost = subirPost;
exports.verHtml = verHtml;
exports.verPipeHtml = verPipeHtml;