// Solicitar el módulo fs para poder acceder a ficheros json.
const fs = require('fs');

// Mi fichero json lo almaceno en una cte.
const fichero_json = "fichero_json.json"

// Leemos el fichero json de forma síncrona y lo almacenamos en una cte.
const tienda_json = fs.readFileSync(fichero_json);

// Crear la estructura JSON a partir del contenido del fichero.
const tienda = JSON.parse(tienda_json);

//-- Mostrar informacion sobre la tienda
console.log("Productos en la tienda: " + tienda.length);

//-- Recorrer el array de productos.
    tienda.forEach((element, index)=>{
    console.log("Producto: " + (index + 1) + ": " + element.nombre);
});