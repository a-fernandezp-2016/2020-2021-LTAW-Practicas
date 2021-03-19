// Primero definimos un Objeto Literal con sus propiedades y valores:
const objeto1 = {
    nombre: "Objeto-1",
    valor: 10,
    test: true
};

// En segundo lugar, imprimimos las propiedades del objeto:
console.log("Nombre : " + objeto1.nombre);
console.log("Valor : " + objeto1.valor);
console.log("Test : " + objeto1.test);

// Comprobamos si un objeto tiene una propiedad:
if("test" in objeto1)
{
    console.log(`El Objeto 1 tiene la Propiedad : test`);
}
console.log("");

// Recorremos todas las propiedades con un bucle for:
for(prop in objeto1)
{
    console.log(`Propiedad: ${prop} y Valor: ${objeto1[prop]}`);
}

// Forma abreviada para obtener las ctes:
const valor = objeto1.valor;
const nombre = objeto1.nombre;

console.log("");
console.log("Nombre: " + nombre);
console.log("Valor: " + valor);