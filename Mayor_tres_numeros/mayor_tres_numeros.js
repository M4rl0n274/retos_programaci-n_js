/*
Mayor de Tres Números
    Descripción: Encuentra el número más grande entre tres valores dados.
    
    Instrucciones:
    Usa prompt() para pedir tres números.
    Usa if-else o Math.max() para encontrar el mayor.
    Muestra el resultado en consola.
*/
//* Solución

const prompt = require("prompt-sync")();

let one = Number(prompt(`Digite el primer número: `))
let two = Number(prompt(`Digite el segundo número: `))
let three = Number(prompt(`Digite el tercero número: `))


if (one > two && one > three){
    console.log(`El numero ${one} es mayor`);

}else if (two > one && two > three){
console.log(`El numero ${two} es mayor`);

} else if (three > one && three > two){
    console.log(`El numero ${three} es mayor`);
}

//* Segunda solución
console.log(`El Número mayor es: ${Math.max(one,two,three)}`);



