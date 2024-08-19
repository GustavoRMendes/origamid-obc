// High Order Fuctions -> Passa outra função como parâmetro

function calcular(x, y, operacao) {
  const resultado = operacao(x, y);
  return resultado;
}

function somar(x, y) {
  return x + y;
}

console.log(calcular(19, 20, somar));

const lista = [1, 2, 3, 4, 5, 6, 7];

lista.forEach(function (x) {
  console.log(x);
});
