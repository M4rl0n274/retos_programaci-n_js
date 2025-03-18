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
  console.log( temp + " + " + a + " = " + a);
}