function route(handle,pathname,response,postData)
{
	console.log("A punto de rutear una peticion para " + pathname);
	if (typeof handle[pathname] ==='function')
	{
		handle[pathname](response,postData);// = iniciar()/subir()
		//quitamos el return para que no ejecute doble la function
		//return handle[pathname](response);
	}
	else
	{
		console.log("No se encontro handler para " + pathname);
		response.writeHead(404,{"Content-Type":"text/html"});
		response.write("404 No Encontrado");
		response.end();
		
	}
}

exports.route = route;