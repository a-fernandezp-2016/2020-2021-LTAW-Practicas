// Declarar módulo HTTP para trabajar con Cliente y Servidor.
const http = require('http');

// Declarar módulo url para trabajar con urls que solicita un cliente o clientes.
const url = require('url');

// Declarar módulo stream de entrada. Los streams son objetos de node.js que nos permiten enviar y recibir datos.
const stream = require('stream');

// Para convertirla a una URL completa, 
// y poder así utilizar el módulo URL para acceder a todos sus campos, hacemos los siguiente:
const myURL = new URL(req.url, 'http://' + req.headers['host']);