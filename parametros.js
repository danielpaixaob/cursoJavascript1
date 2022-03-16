// paramêtros de função.

                //x     //y
function soma(numero1, numero2) {
    return numero1 + numero2;
}
             //(x , y)
console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// parâmetros e argumentos são a mesma coisa.

//ordem dos parâmetros 

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e a minha idade é ${idade}.`
}

console.log(nomeIdade("Daniel", 31));

function multipica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multipica(soma(4,5)));
