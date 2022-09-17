const escola = "cod3r"

console.log(escola.charAt(4)) // mostra letra do indice 4 (obs:contagem de 0 a 4)
console.log(escola.charCodeAt(3)) // codigo relacionado ao "3"
console.log(escola.indexOf('3')) // fala se '3' esta na const escola

console.log(escola.substring(1)) // de qual posiçao começa a printar na tela
console.log(escola.substring(0,3)) // printar da posiçao 0 a 2 

console.log('Escola '.concat(escola.concat("!"))) // conectando 
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // corrige na posiçao 3 

console.log('Ana, Maria, Pedro'.split(',')) // gerou um arrey atravez da virgula 

