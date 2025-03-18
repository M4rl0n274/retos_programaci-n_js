// Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// ! La secuencia de Fibonacci es una sucesión de números en la que cada número se obtiene sumando los dos anteriores, comenzando con 0 y 1.
//! 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

let a = 1;
let b = 0;
let temp;
// primeros 15 valores
for (let y = 0; y <= 9; y++) {
  //console.log(a);
  temp = a + b;
  a = b;
  b = temp;
  console.log(temp + " + " + a + " = " + a);
}

//* Solución 2

const prompt = require("prompt-sync")();

let detener = Number(
  prompt("Dígite números de la secuencia Fibonacci desea imprimir: ")
);

if (detener <= 0) {
  console.log("Ingrese un valor mayor a 0");
} else {
  let c = 1;
  let d = 0;
  let temporary;

  for (let y = 0; y < detener; y++) {
    //console.log(a);
    temporary = c + d;
    c = d;
    d = temporary;
    console.log(temporary + " + " + c + " = " + d);
  }
}
