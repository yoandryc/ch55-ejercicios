/*
*Secret Society
 ?Find the name of a secret society based on the first letter of each member's name.
 
!Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.

1. recibimos un array que tiene nombres,
  1.1 estos nombres empiezan en mayus
2. Inicializar una variable para guardar las inciales
3. utilkizar un ciclo para recorrer el array
4. obtner lka primera letra de cada nombre utilizando la notacion de corchetes
5.m Pegar la inicial de cada nombre para
  Retornar el nombre de la sociedad secreta basado en la primera letra de cada nombre
*/
const secretName = function(namesArray){
let societyName="";
const sortedNames = namesArray.toSorted();
sortedNames.forEach((name)=> societyName = societyName + name[0]);
return societyName;
}
console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));
