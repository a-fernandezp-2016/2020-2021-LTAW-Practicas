//-- Importar el módulo FS
const fs = require('fs');

// Almacenar 3 productos en cte.
const fichero_tienda = "tienda.json"

// Leemos el fichero de forma síncrona.
const tienda_json = fs.readFileSync(fichero_tienda);

// Crear la estructura JSON a partir del contenido del fichero.
const tienda = JSON.parse(tienda_json);

//-- Mostrar los usuarios que hay registrados.
console.log("Usuarios registrados en la tienda: " + tienda["usuarios"].length);

//-- Recorrer el array de usuarios.
tienda["usuarios"].forEach((element, index)=>{
    console.log("Usuario " + (index + 1) + ": " + element.nombre);
});

// Espacio.
console.log("");

//-- Mostrar los productos que hay en la tienda.
console.log("Número de productos que hay en la tienda: " + tienda["productos"].length);

//-- Recorrer el array de productos.
tienda["productos"].forEach((element, index)=>{
    console.log("Producto " + (index + 1) + ": " + element.nombre);
});

// Espacio.
console.log("");

//-- Mostrar el nº de pedidos pendientes que hay en la tienda.
console.log("Número de pedidos pendientes que hay en la tienda: " + tienda["pedidos"].length);

//-- Recorrer el array de los detalles de los pedidos.
tienda["pedidos"].forEach((element, index)=> {
    console.log("Cliente " + (index + 1) + ": " + element.nombre);
    console.log("Dirección: " + element.direccion);
    console.log("Tarjeta del banco del titular: " + element.tarjetaBancaria);
    element["productos"].forEach((element, index)=>{
        console.log("Nombre del producto: " + element.nombre);
        console.log(`Su valor monetario es de: ${element.precio} €`);
        console.log("Cantidad comprada: " + element.cantidad);
    });
});