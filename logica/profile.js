let counter =0;
const username = prompt ("Hola, ingresa tu nombre de usuario");
const age = prompt("Ahora ingresa tu edad");
const favoriteMovies =[];
// vamos a pedir 5 peliculas primero
alert("A continuacion te vamos a pedir tus 5 peliculas Favoritas")
for(let i=1; i<=5; i++){
  //los string dentro de `` se conocen como string literal,
  // concatenar variables de froma mas sencilla y legible
  favoriteMovies.push(prompt(`ingresa la pelicula numero ${i}`)); 
}
console.log(` Hola soy ${username} tengo ${age} años y mis peliculas favoritas son: ` );

while(counter< favoriteMovies.length){
  console.log(`Mi pelicula favorita numero ${counter+1} es ${favoriteMovies[counter]} ` );
  counter++;
}
