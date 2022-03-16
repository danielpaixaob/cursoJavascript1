// == (comparação implicita) só compara o valor;

const numero = 5;
const texto = "5";

console.log(numero == texto);

// === (comparação explicita) compara o valor e o tipo de dado;

const numero1 = 5;
const texto1 = "5";

console.log(numero1 === texto1);

//typeof informa que tipo de dado está sendo armazenado, ex: "number" "string"
console.log(typeof numero);
console.log(typeof texto);

// sempre optar por usar a conversão explicita;

Number();
String();