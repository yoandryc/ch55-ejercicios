/*
*Positive dominance in Array
*Write a function to determine if an array is positively dominant.
*An array is positively dominant when the majority of its elements are positive.
 Verificar si un arreglo es positivamente dominante, es decir, si tiene más números positivos que negativos o ceros.
? 1: Definir la función
? 2: Crear los contadores
  ?2.1: Inicializamos dos variables para contar positivos y no positivos.
? 3: Recorrer el arreglo
  ? 3.1:Usamos un for para revisar cada número del arreglo.
? 4: Comparar cantidades
  ? 4.1: Verificamos si hay más positivos que no positivos.
?5: Mostrar los resultados con alert
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/
function positiveDom(arr) {
  let positivos = 0;
  let noPositivos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positivos++;
    } else {
      noPositivos++;
    }
  }

  // Devuelve true si hay más positivos que no positivos
  return positivos > noPositivos;
}
alert("Dominancia positiva en un array");
alert("array [-1, -3, -5, 4, 6767] "+positiveDom([-1, -3, -5, 4, 6767])); // false
alert("array [1, -2, 3, 4] "+positiveDom([1, -2, 3, 4]));         // true
alert(" array[-10, 20, 30] "+positiveDom([-10, 20, 30]));         // true