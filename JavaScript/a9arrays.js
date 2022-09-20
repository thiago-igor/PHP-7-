const valores = [7, 6.9, 8.9, 9]
console.log(valores[0], valores[3]) // ler o pimeiro e ultimo do array

valores[4] = 10
console.log(valores)

console.log(valores.length)

valores.push({id:3}, false, null, 'teste')// adicionando mais coisas no array com a funçao push
console.log(valores)

console.log(valores.pop()) // ler e dps apaga 
delete valores[0] // apagar primeiro 
console.log(valores)

console.log(typeof valores)