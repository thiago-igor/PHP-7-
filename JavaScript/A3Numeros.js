const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // se inteiro : true / se ponto flutuante: false 

const avaliacao1 = 9.81
const avaliacao2 = 6.12

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1 + peso2)

console.log(media.toFixed(2)) // para ter a penas 2 casas dps da virgula: toFixed(2)

console.log(media.toString)
console.log(typeof media)