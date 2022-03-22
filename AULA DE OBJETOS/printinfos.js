const cliente = {
    nome:"André",
    idade:36,
    cpf:"10121212",
    email:"andre@email.com"
}

// console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)

// console.log(cliente.cpf.substring(0,3))

function exibeNomeIdade(){
    console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
}

function exibe3PrimeirosNumerosDoCPF() {
    console.log(`Os 3 primeiros numeros do seu cpf são: ${cliente.cpf.substring(0,3)}`)
}

exibeNomeIdade()
exibe3PrimeirosNumerosDoCPF()