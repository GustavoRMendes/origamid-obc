// Funções
// Entrada - Procedimento - Saída
// Função sempre vai ter procedimento.
// Bloco de código que pode ser executado e reutilizado
// As entradas são chamadas de parâmetro
// As saídas são chamadas de retorno
// Ao executar uma função, você pode passar argumentos
// Argumentos podem ser funções
// Pode ou não retornar um valor
/* 
  function nomeDaFuncao(entradas){
    // procedimento
    return saída
  }
*/

function ola(nome) {
  return console.log("Olá, " + nome);
}
ola("Gustavo");

function areaDoQuadrado(lado) {
  return console.log("A área do quadrado é igual a  " + lado * lado);
}
areaDoQuadrado(4);
areaDoQuadrado(5);
areaDoQuadrado(25);

function pi() {
  return 3.14;
}
const total = 10 * pi();
console.log(total.toFixed(2));

function triploDoTotal(dinheiro = 0) {
  const total = 3 * dinheiro;
  return total;
}

console.log(triploDoTotal(30));
console.log(triploDoTotal());
function criarUsuario(senha, nome, email) {
  const usuario = {
    nome,
    email,
    senha,
  };
  return usuario;
}
console.log(criarUsuario(20102004, "Gustavo", "gustavormendess@gmail.com"));

// Quando você tem muitos parâmetros na função, você pode optar por substituir por um parâmetro como objeto.

function novaJogadora(jogadora) {
  return jogadora.nome + " " + jogadora.sobrenome;
}

const alice = {
  nome: "alice",
  sobrenome: "rua",
};
console.log(novaJogadora(alice));

// Função recursiva - Chama a si mesma.
function dividir(numero) {
  console.log(numero);
  if (numero % 2 === 0) {
    dividir(numero / 2);
  } else {
    return numero;
  }
}

dividir(20);

function fatorial(numero) {
  if (numero === 1) {
    return 1;
  } else {
    return numero * fatorial(numero - 1);
  }
}

console.log(fatorial(10));
