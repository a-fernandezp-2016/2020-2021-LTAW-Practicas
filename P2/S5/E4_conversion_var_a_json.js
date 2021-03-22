// Solicitar el módulo fs para poder acceder a ficheros json.
const fs = require('fs');

// Mi fichero json lo almaceno en una cte.
const fichero_json = "fichero_json.json"

// Creo un fichero json de salida, guardado en fichero_json_out.json.
const fichero_json_out = "fichero_json_out.json"

// Leemos el fichero json de forma síncrona y lo almacenamos en una cte.
const tienda_json = fs.readFileSync(fichero_json);

// Crear la estructura JSON a partir del contenido del fichero.
const tienda = JSON.parse(tienda_json);

// Modificar nombre del producto 1.
tienda[0]["nombre"] = "INTEL CORE I7"

//-- Mostrar informacion sobre la tienda
console.log("Productos en la tienda: " + tienda.length);

//-- Recorrer el array de productos
tienda.forEach((element, index)=>{
  console.log("Producto " + (index + 1) + " : " + element.nombre);
});

// Convertir de JSON a Variable.
let myJson = JSON.stringify(tienda);

// Guardarlo en fichero de salida de forma síncrona.
fs.writeFileSync(fichero_json_out, myJson);

console.log("Información guardada en el fichero " + fichero_json_out);