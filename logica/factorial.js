/*
Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

*1.solicitamos al usuario que introduzca un número y convertimos (que es una cadena de texto) a un número entero, para poder realizar cálculos con él.
* 2.utilizamos una función recursiva  En este caso, el caso base ocurre cuando el número ingresado es 0 o 1, devolviendo simplemente 1. Si no, la función continúa multiplicando el número actual por el factorial del número anterior, repitiendo este proceso hasta llegar a 1.
*/
alert("factorial usando recusividad");
let number = prompt("Ingresa el numero: ");
number = parseInt(number);

function factorial(number){
 if (number === 0 || number === 1 ){
    return 1;
 }
    
 else {
    return number * factorial (number - 1);
 }
}

alert("Su factorial es: " + factorial(number));