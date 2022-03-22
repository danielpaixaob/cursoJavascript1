const cliente = {
    nome:"André",
    idade:36,
    cpf:"111.111.111-11",
    email:"andre@email.com",
    fones:["(12)1212-1212", "(23)2323-2323"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"Filha",
    dataNasc:"20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)