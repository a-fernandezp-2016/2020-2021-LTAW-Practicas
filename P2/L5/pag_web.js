//-- Importar el módulo FS
const fs = require('fs');

// Importar el módulo HTTP para la conexión cliente-servidor.
const http = require('http');
const url = require('url');

// cte con el nº del puerto.
const PUERTO = 9000;

// Almacenar 3 productos en cte.
const fichero_tienda = "tienda.json"

// Leemos el fichero de forma síncrona.
const tienda_json = fs.readFileSync(fichero_tienda);

// Crear la estructura JSON a partir del contenido del fichero.
const tienda = JSON.parse(tienda_json);

// Creación del servidor web.
const server = http.createServer((req, res)=>{
    console.log("\nPetición recibida!");

    // Inicialización de variables.
    let code = 200;
    let code_mensj = "OK";
    let mimetype = "application/json";
    
    // Asignamos una nueva URL.
    const url_tienda = new URL(req.url, 'http://' + req.headers['host']);
    
    // Si se pide la página solicitada.
    if(url.pathname == "/productos")
    {
        //-- Recorrer el array de productos.
        tienda["productos"].forEach((element, index)=>{
            res.write("Producto " + (index + 1) + ": " + element.nombre);
        });

        // Respuesta del servidor.
        res.statusCode(code);
        res.statusMessage(code_mensj);
        res.setHeader('Content-Type', mimetype);
    }
    res.end();
});

// Servidor preparado para responder a cliente.
server.listen(PUERTO);
console.log("Servidor escuchando en el puerto: " + PUERTO);