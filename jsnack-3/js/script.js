// Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) prendendo alternativamente gli elementi 
// da uno e dall’altro
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].

lettere = ['a', 'b', 'c', 'd'];
numeri = [1, 2, 3, 4];

sommaArray = sum(lettere, numeri);
console.log(sommaArray);

function sum(primoArray, secondoArray) {
  let terzoArray = [];
  for (let index = 0; index < primoArray.length; index++) {
    const element = primoArray[index];
    const secondElement = secondoArray[index];

    terzoArray.push(element, secondElement);
  }
  return terzoArray;
}