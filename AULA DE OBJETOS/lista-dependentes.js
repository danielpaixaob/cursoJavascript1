const cliente = {
    nome:"André",
    idade:36,
    cpf:"111.111.111-11",
    email:"andre@email.com",
    fones:["(12)1212-1212", "(23)2323-2323"],
    dependentes: [{
        nome:"Sara",
        parentesco:"Filha",
        dataNasc:"20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Samia",
    parentesco:"Filha",
    dataNasc:"04/01/2014"
})

// console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")

console.log(filhaMaisNova[0].nome)