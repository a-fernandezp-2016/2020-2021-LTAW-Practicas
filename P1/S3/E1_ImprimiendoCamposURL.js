// Creamos nuestro objeto local.
const local = new URL('http://localhost:8080/mi_tienda/listados.html?articulo=pendrive&color=blanco#descripcion');

// Imprimimos la información que tiene la URL.
console.log("URL completa: " + local.href);
console.log("Protocolo usado: " + local.protocol);
console.log("El puerto de comunicación usado es: " + local.port);
console.log("La ruta a donde queremos acceder: " + local.pathname);
console.log("La búsqueda específica de la URL es: " + local.search);
console.log("El fragmento de la parte del Cliente es: " + local.hash);
console.log("El HOST de la URL es: " + local.host);
console.log("El nombre del HOST de la URL es: " + local.hostname);
console.log("La parte de la URL que va desde el protocolo al puerto es el Origen: " + local.origin);

// Recorrer todas las búsquedas.
local.searchParams.forEach((value, name) => {
    console.log(" * Parámetro: " + name + " = " + value);
} );

// Imprimir directamente los parámetros de la búsqueda.
console.log("Búsqueda => Artículo: " + local.searchParams.get('articulo'));
console.log("Búsqueda => Color: " + local.searchParams.get('color'));
console.log("Búsqueda => Otro: " + local.searchParams.get('otro'));