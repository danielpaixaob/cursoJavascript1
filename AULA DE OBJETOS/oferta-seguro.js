const cliente = {
    nome:"André",
    idade:36,
    cpf:"111.111.111-11",
    email:"andre@email.com",
    fones:["(12)1212-1212", "(23)2323-2323"],
    dependentes: [
     {
        nome:"Sara Silva",
        parentesco:"Filha",
        dataNasc:"20/03/2011" },
      {
        nome: "Samia Maria",
        parentesco:"Filha",
        dataNasc:"04/01/2014"
      }
    ],
    saldo:100,

    depositar:function(valor){
        this.saldo += valor
    },
}

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)