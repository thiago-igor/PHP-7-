const nome = 'rebeca'
const concatenacao = 'Olá ' + nome + '! \n' 

const template = ` Olá  
${nome} ` // entre crases é mais facil de se concatenar 

console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 =  ${1 + 1}`)

//usando em funçoes:
 const up = texto => texto.toUpperCase()
 console.log (`Ei... ${up('cuidadoo')} !`)
