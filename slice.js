// el método slice en JavaScript se usa para extraer una sección de un array y
// retorna un array nuevo que contiene los elementos extraídos. No modifica el
// array original
// Sintaxis:
// array.slice(startIndex, endIndex)

// - startIndex (optional): base 0 y es donde comienza la extracción. Si no se define
// la extracción comienza en base 0. Si es negativo, indica que la extracción
// comienza desde el final, es decir, si es -1 comienza desde el último item, si
// es -2 desde el penúltimo item and so on

// - endIndex (optional): por default en base 0 e indica donde terminar la
// extracción, pero no incluye el endindex. Si es undefined, finaliza donde
// termina la secuencia. Si es un número negativo, indica un offset desde el
// final de la secuencia.

const array = [1, 2, 3, 4, 5];

// extraer los elementos desde el index 1 al 3 (sin incluir el 5)

const slicedArray1 = array.slice(1, 3);
//console.log(slicedArray1);

// extyraer los elementos desde el index 2 al final del array

const slicedArray2 = array.slice(2);
//console.log(slicedArray2);

// extraer los ultimos dos elementos del array

const slicedArray3 = array.slice(-2);
//console.log(slicedArray3);

// extraer los elementos desde el index -3 al -1
const slicedArray4 = array.slice(-3, -1);
//console.log(slicedArray4);

// shuffle an array

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray);
console.log(shuffledArray);
