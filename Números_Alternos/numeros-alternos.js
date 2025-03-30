/*
Escribe un programa que imprima los números del 1 al 50, pero con el siguiente patrón:

Si el número es par, imprímelo en formato normal.

Si el número es impar, imprímelo en orden inverso (ejemplo: 13 se imprime como 31).

Nota: Si el número impar tiene solo un dígito, se imprime igual.
*/

let i = 0;

while (i <= 50) {
  if (i % 2 == 0) {
    console.log(`${i} Es par`);
  } else if (i % 1 == 0) {
    let reverse = i.toString().split("").reverse().join("");
    console.log(`${reverse} es impar`);
  } else {
    console.log(i);
  }

  i++;
}

// while(i<10){

//     if (i % 2 == 0) {
//     let reverse = i.toString().split("").reverse().join("");
//     console.log(reverse);
//     }
//     i++
// }
