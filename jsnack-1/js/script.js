/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

const zucchina = [
  {
    name: 'zucchina1',
    varieta: 'nero di Milano',
    peso: 50,
    lunghezza: '10cm',
  },

  {
    name: 'zucchina2',
    varieta: 'romanesco',
    peso: 70,
    lunghezza: '15cm',
  },

  {
    name: 'zucchina3',
    varieta: 'ortolano di Faenza',
    peso: 90,
    lunghezza: '18cm',
  },

  {
    name: 'zucchina4',
    varieta: 'fiorentina',
    peso: 30,
    lunghezza: '7cm',
  },

  {
    name: 'zucchina5',
    varieta: 'siciliano',
    peso: 23,
    lunghezza: '13cm',
  },

  {
    name: 'zucchina6',
    varieta: 'striata di Napoli',
    peso: 67,
    lunghezza: '21cm',
  },

  {
    name: 'zucchina7',
    varieta: 'bianca triestina',
    peso: 32,
    lunghezza: '16cm',
  },

  {
    name: 'zucchina8',
    varieta: 'rigata pugliese',
    peso: 57,
    lunghezza: '17cm',
  },

  {
    name: 'zucchina9',
    varieta: 'tondo di Piacenza',
    peso: 100,
    lunghezza: '8cm',
  },

  {
    name: 'zucchina10',
    varieta: 'tondo di Nizza',
    peso: 89,
    lunghezza: '24cm',
  },
 
];

let sum = 0;
for (let index = 0; index < zucchina.length; index++) {
  const element = zucchina[index];
  // faccio vedere le varie zucchine
  console.log(element);
  //sommo il peso di ogni zucchina
  sum += element.peso;
}
console.log(sum);