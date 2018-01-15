var server = require ("./server");
var router = require ("./router");
var requestHandlers = require ("./Controllers/requestHandlers");
//var views = require ("./views");

//creamos un objeto ( nombre = valor)
var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;
handle["/subirPost"] = requestHandlers.subirPost;
handle["/verHtml"] = requestHandlers.verHtml;
handle["/verPipeHtml"] = requestHandlers.verPipeHtml;

//router.route --> nombre_archivo.llamada export
//pasamos como parametro a la funcion route en si
server.iniciar(router.route, handle);