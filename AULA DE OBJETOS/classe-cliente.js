//sempre dar o nome de uma classe com letra inicial maiuscula 
class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo =+ valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const andre = new Cliente("Andre","andre@email.com","111",100)


andre.exibirSaldo()

console.log(andre)