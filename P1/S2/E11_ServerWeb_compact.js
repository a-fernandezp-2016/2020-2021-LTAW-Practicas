// Declarar módulo http para trabajar con servidores web.
const http = require('http');

// Creamos el servidor web.
const server = http.createServer();

// Definir el Puerto a utilizar.
const puerto = 8080;

//-- Función de retrollamada de petición recibida.
//-- Cada vez que un cliente realiza una petición.
//-- Se llama a esta función.
// Creamos una función para que el servidor web atienda al cliente.
function atencion(solicitud, respuesta)
{
    console.log("Petición recibida!");
}
//-- solicitud: http.IncomingMessage: Mensaje de solicitud.
//-- respuesta: http.ServerResponse: Mensaje de respuesta (vacío).

//-- Activar la función de retrollamada del servidor
server.on('request', atencion);

//-- Activar el servidor. A la escucha de peitciones
//-- en el puerto 8080.
server.listen(puerto);

// Mensaje de que el server escucha en dicho puerto.
console.log("El servidor web está activado y, escucha en el puerto: " + puerto);