/*
Números Pares e Impares
    Descripción: Dado un número, determina si es par o impar.

    Instrucciones:
    Pide al usuario un número.
    Usa un condicional (if-else) para verificar si es par o impar.
    Muestra el resultado en la consola.

*/
//* Solución
const prompt = require("prompt-sync")();
let count;
count = Number(prompt("Digite un Número: "));

if (count % 2 == 0) {
  console.log(`El número ${count} es par`);
} else if (count % 3 == 0) {
  console.log(`El número ${count} es impar`);
} else{
    console.log(`Ingrese un npumero valido`);
    
}
