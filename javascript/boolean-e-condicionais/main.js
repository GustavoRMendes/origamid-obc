// Boolean e Condicionais

const verdadeiro = true;
const falso = false;

if (true) {
  console.log(true);
} else if (false) {
  console.log(false);
} else {
  console.log("else");
}

if (verdadeiro) {
  console.log("true");
} else if (falso) {
  console.log("falso");
} else {
  console.log("nenhum");
}

console.log(10 === 20);
console.log(10 >= 20);
console.log(10 <= 20);
console.log(10 !== 20);
console.log(!false);
console.log(!!verdadeiro);
console.log(!!falso);
console.log(verdadeiro || falso);
console.log(verdadeiro && falso);
const resultado =
  verdadeiro === "falso" ? "é falso" : "verdadeiro é verdadeiro";
console.log(resultado);

// switch
function obterNomeDia(numeroDia) {
  switch (numeroDia) {
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    case 6:
      return;
      "Sábado";
    case 7:
      return "Domingo";
    default:
      return "Número de dia inválido";
  }
}

const dia = 3;
const nomeDoDia = obterNomeDia(dia);
console.log("Hoje é " + nomeDoDia);
