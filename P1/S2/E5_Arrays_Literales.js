//-- Ejemplo de arrays literales.

//-- Crear una lista (array) de 4 elementos.
const num_fav = [2,6,12,15,17,22];

//-- Mostrar el elemento 2.
console.log("Elemento 2 del Array: " + num_fav[2]);
console.log("");
//-- Recorrer todos los elementos.
for(i in num_fav)
{
    console.log(`num_fav[${i}] = ${num_fav[i]}`);
}
console.log("");
//-- Imprimir el numero total de elementos.
console.log("Cantidad de elementos del Array: " + num_fav.length);
console.log("");