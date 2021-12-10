// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const zucchina = [
  {
    name: 'zucchina1',
    varieta: 'nero di Milano',
    peso: 50,
    lunghezza: 10,
  },

  {
    name: 'zucchina2',
    varieta: 'romanesco',
    peso: 70,
    lunghezza: 15,
  },

  {
    name: 'zucchina3',
    varieta: 'ortolano di Faenza',
    peso: 90,
    lunghezza: 18,
  },

  {
    name: 'zucchina4',
    varieta: 'fiorentina',
    peso: 30,
    lunghezza: 7,
  },

  {
    name: 'zucchina5',
    varieta: 'siciliano',
    peso: 23,
    lunghezza: 13,
  },

  {
    name: 'zucchina6',
    varieta: 'striata di Napoli',
    peso: 67,
    lunghezza: 21,
  },

  {
    name: 'zucchina7',
    varieta: 'bianca triestina',
    peso: 32,
    lunghezza: 16,
  },

  {
    name: 'zucchina8',
    varieta: 'rigata pugliese',
    peso: 57,
    lunghezza: 17,
  },

  {
    name: 'zucchina9',
    varieta: 'tondo di Piacenza',
    peso: 100,
    lunghezza: 8,
  },

  {
    name: 'zucchina10',
    varieta: 'tondo di Nizza',
    peso: 89,
    lunghezza: 24,
  },

];


// inizializzo le somme a 0
let sumGrandi = 0;
let sumPiccole = 0;

// creo i due array vuoti su cui pushare le lunghezze
let zucchineGrandi = [];
let zucchinePiccole = [];
for (let index = 0; index < zucchina.length; index++) {
  const element = zucchina[index];
  //faccio vedere la lunghezza delle zucchine
  console.log(element);
  if (element.lunghezza > 15) {
    //sommo il peso di ogni zucchina grande
    zucchineGrandi.push(element);
    sumGrandi += element.peso;
  } else {
    //sommo il peso di ogni zucchina piccola
    zucchinePiccole.push(element);
    sumPiccole += element.peso;
  }


}
//stampo i due pesi in console
console.log('Le zucchine piccole pesano ' + sumPiccole + ' kg');
console.log('Le zucchine grandi pesano ' + sumGrandi + ' kg');