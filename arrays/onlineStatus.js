/*
*Online status
 *Display online status for a list of users.
 !Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/
function onlineStatus(users) {
  const count = users.length;

  if (count === 0) {
    return "No hay usuarios en línea";
  } else if (count === 1) {
    return `${users[0]} está en línea`;
  } else if (count === 2) {
    return `${users[0]} y ${users[1]} están en línea`;
  } else {
    return `${users[0]}, ${users[1]} y ${count - 2} más están en línea`;
  }
}

// Ejemplo de uso
const usuarios = ['mockIng99', 'J0eyPunch', 'BelicoHast'];
alert(onlineStatus(usuarios)); // mockIng99, J0eyPunch y 1 más están en línea
