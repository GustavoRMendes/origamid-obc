// Funções
// Entrada - Procedimento - Saída
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
