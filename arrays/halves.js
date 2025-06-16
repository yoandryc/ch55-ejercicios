/*
Number divided into halves
 Given a number, return the number divided into its halves in an array.
 1. recibir un numero

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
 
*/

// Función que divide un número en dos mitades iguales y las devuelve en un arreglo
function numDiv(num) {
  return [num / 2, num / 2];
}

// Pedimos al usuario que ingrese un número
let input = prompt("Ingresa un número para dividirlo en mitades:");
let number = parseFloat(input); // Convertimos a número decimal por si es impar

let resultado = numDiv(number);

alert("El número dividido en mitades es: [" + resultado[0] + ", " + resultado[1] + "]");
