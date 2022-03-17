const notas = [10, 6.5, 8 , 7.5]

let somaDasNotas = 0

//forEach é um metodo chamado de callback
notas.forEach(nota => {
                 //nota[i]
    somaDasNotas += nota
})

//notas.forEach(function(nota){
//  somaDasNotas += nota    
//})

let media = somaDasNotas / notas.length

console.log(media)