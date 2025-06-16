/*
*Array of Multiples
 *Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 * 1: Definir la función y el arreglo vacío
 * 2: Usar un for para llenar el arreglo con múltiplos
 * 3: Retornar el arreglo
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
*/

function arrayMultiplos(numero, longitud) {
  const resultado = [];

  // Recorremos desde 1 hasta la longitud
  for (let i = 1; i <= longitud; i++) {
    resultado.push(numero * i); // Agregamos el múltiplo al arreglo
  }

  return resultado;
}
alert("Ejemplo (2,10): " + arrayMultiplos(2, 10).join(", "));
// Salida: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
alert("Ejemplo (17,6): " + arrayMultiplos(17, 6).join(", "));
// Salida: [17, 34, 51, 68, 85, 102]
