/*
Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
* 1. pedir 10 numeros 
* 2. en la salida cual es el mas grande.
*/

let highest=0;

for (let i = 1; i <= 10; i++) {
  let input = prompt(`ingresa un numero ${i}:`);
  let number = Number(input);

  // Validar que sea un número
  if (isNaN(number)) {
    console.log("Numero invalido. Porfavor ingresa un numero.");
    i--; // Volver a pedir el mismo número
  } else {
    if (number > highest) {
      highest = number;
    }
  }
}

alert(`el numero ingresado mas grande fue: ${highest}`);