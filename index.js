var server = require ("./server");
var router = require ("./router");
var requestHandlers = require ("./requestHandlers")

//creamos un objeto ( nombre = valor)
var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;
handle["/subirPost"] = requestHandlers.subirPost;

//router.route --> nombre_archivo.llamada export
//pasamos como parametro a la funcion route en si
server.iniciar(router.route, handle);