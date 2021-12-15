/* Partendo da questo array e aggiungiamo a  tutti gli elementi la proprieta age aggiungendo un numero casuale da 3 a 50.
Poi stampiamo in pagina */


const arrayObj = [
  { name: 'Poppy', type: 'tshirt', color: 'red'},
  { name: 'Jumping', type: 'occhiali', color: 'blue'},
  { name: 'CrissCross', type: 'scarpe', color: 'black'},
  { name: 'Jenny', type: 'borsa', color: 'pink'},
];

function numCasuale(min, max) {
 return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let container = document.querySelector('.container');

arrayObj.forEach((element) => {
  element.age = numCasuale(3, 50);  
  container.innerHTML += ` name: ${element.name}, type: ${element.type}, color: ${element.color}, age: ${element.age} `
});
console.log(arrayObj);

