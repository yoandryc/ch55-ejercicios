/* 
*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
Result example: "Time for bed after 10 seconds".
* 1. preguntar al usuario cuantos segundos debo esperar para que se ejecute la alarma (timer)
* 2. Mostrar un mensaje cada segundo
* 3. al finalizar , mostrar el mensaje ya es hora de dormir despues de x segundos.
*/
let input = prompt("¿Cuántos segundos faltan para la alarma?");
let seconds = Number(input);
function secondsCounter(secondsLeft) {
  console.log(`Faltan ${secondsLeft} segundo(s)...`);

  if (secondsLeft >1) {
    // Se llama a sí misma después de 1 segundo
    setTimeout(()=>{
    secondsCounter(secondsLeft -1);
    }, 1000);

  } else {
    console.log(`Hora de dormir después de ${seconds} segundos.`);
    alert(`Hora de dormir después de ${seconds} segundos.`);
  }
}

// Inicia la cuenta
secondsCounter(seconds);