function cliente(nome,cpf,email,saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const andre = new cliente("Andre","111.111.111-11","andre@gmail.com",100)

console.log(andre)