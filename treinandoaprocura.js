const alunos = ['Daniel', 'Luma', 'Keka', 'Caramela']
const sobrenomes = [' Paixão', ' de Sousa', ' Yoshioka', ' Batista']
const notasDosALunos = [3, 10, 9, 6]

let listaDeNomesSobrenomeseNotas = [alunos, sobrenomes,notasDosALunos]

const exibeNomesCompletosENotas = (nomeDoAluno) => {
    if(listaDeNomesSobrenomeseNotas[2].includes(nomeDoAluno)){
        let indice = listaDeNomesSobrenomeseNotas[2].indexOf(nomeDoAluno)
        return listaDeNomesSobrenomeseNotas[0][indice] + listaDeNomesSobrenomeseNotas[1][indice] + ' a sua nota é: ' + listaDeNomesSobrenomeseNotas[2][indice]
    } else {
        return "Aluno não está cadastrado!"
    }
}

console.log(exibeNomesCompletosENotas(6))
