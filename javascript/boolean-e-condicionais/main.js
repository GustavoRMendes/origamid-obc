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
