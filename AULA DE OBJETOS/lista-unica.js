const clientes = [
    {
        nome: "André",
        cpf: "111.111.111-11",
        dependentes: [{
            nome: "Sara",
            parentesco: "Filha",
            dataNasc: "20/03/2011"
        },
        {
           nome: "Samia",
           parentesco: "Filha",
           dataNasc: "04/01/2014"
        }],
    },
    {
        nome: "Juliana",
        cpf: "222.222.222-22",
        dependentes: [{
            nome: "Sophia",
            parentesco: "Filha",
            dataNasc: "30/08/2020"
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)