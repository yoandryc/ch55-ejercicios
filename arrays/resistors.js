/**
 * Sum of Resistors in Series
 

Calculate the sum of all resistors connected in series.
Examples:
sumResitance([-1,5,6,3]) should return "15 ohms". (|−1| + 5 + 6 + 3 = 15)
sumResitance([14,3.5,6]) should return '23.5 ohms'. (14 + 3.5 + 6 = 23.5)
sumResitance([8,15,100]) should return '123 ohms'. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values 
are positive.
 * 1. un array de resistencias
   2. usando Math.abs obtener el valor absoluto de los elementos del array
      2.1 usar un map para sacar todos los valores absolutos
   3. reduce, usar ciclos para hacer la suma
   4. retornar un mensaje del tipo "15 ohms"
 * 
 */
function sumOfResistors(resistorsArray){
  const resistorsAbs = resistorsArray.map((resistor) => Math.abs(resistor));
  const totalResistance = resistorsAbs.reduce((total,current) =>total + current,0);
  return `${totalResistance} onhms`
}
console.log(sumOfResistors([-1,5,6,3]));
console.log(sumOfResistors([14,3.5,6]));
console.log(sumOfResistors([8,15,100]));