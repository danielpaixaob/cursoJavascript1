const notas = [10,6,8]
notas.push(7) // usado para inserir um dado nos parametros
// se não colocar nenhum parametro no push, ele vai dar NaN
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)