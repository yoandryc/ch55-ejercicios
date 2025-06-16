/*Palindrome
* Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
palindromo=
Palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda
1. Ingresamos la palabra u oracion
2. Guardamos la palabra en una variable y la normalizamos para que no tenga espacios, mayusculas o signos de puntuacion 
3. Obtenemos el tamaño total de la palabra con el metodo length y lo guardamos en una variable que sera el contador del lado derecho
4. Iniciamos otro contador que llevara la cuenta de la palabra desde el lado izquierdo
5. Un ciclo while para recorrer la palabra, mientras las letras del lado izquierdo sea menor a las del lado derecho
6. Si las letras son iguales del lado izquierdo y derecho, entonces la palabra es palindromo, de lo contrario no lo es
*/

function isPalindrome(input) {
  // Normalizar: eliminar caracteres que no sean letras o números y convertir a minúsculas
  const cleaned = input
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ''); // conservar solo letras y números

  // Invertir la cadena normalizada 
  //split convierte la cadenna en un arreglo de caracteres
  // reverse() Invierte el orden de los elementos del arreglo.
 // join('') Une el arreglo nuevamente en una cadena de texto.
 
  const reversed = cleaned.split('').reverse().join('');

  // Comparar
  return cleaned === reversed;
}

// Pedir al usuario una palabra o frase
const userInput = prompt("Ingresa una palabra o frase:");

// Verificar y mostrar el resultado
if (userInput) {
  if (isPalindrome(userInput)) {
    alert("¡Es un palíndromo!");
  } else {
    alert("No es un palíndromo.");
  }
} else {
  alert("No se ingresó ningún texto.");
}
