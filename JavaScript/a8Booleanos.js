let isAtivo = false
console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo) // aqui utilizamos a negaçao da negaçao 

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!1)
console.log(!!'')
console.log(!!{})
console.log(!![])


console.log('\nos falsos...')
console.log(!!0) // aqui percebemos que o 0 é falso e outro numero qualquer é verdadeiro 
console.log(!!'') // verifica se tem algo na String
console.log(!!null)
console.log(!!undefined)

let nome = ''
console.log(nome || 'Desconhecido') // aqui ele faz nome ou desconhecido. como nao temos nada no nome, ele vai para o desconhecido 
