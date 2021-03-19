// Declarar módulo url para trabajar con urls que solicita un cliente o clientes.
const url = require('url');

// la clase URL que es la que me permite crear objetos de tipo URL, con los que trabajar. 
// Accedemos a esa clase de esta forma:
const URL = url.URL;

//-- Construir un objeto URL
const myURL = new URL('https://sub.example.com:8080/p/a/t/h?query1=string1&query2=string2#hash');

//-- Imprimir el objeto URL para ver todas sus partes
console.log(myURL); 