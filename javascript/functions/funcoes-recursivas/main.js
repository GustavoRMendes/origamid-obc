// Função recursiva - Chama a si mesma para resolver algum problema.

// caso base ou condição de parada
// chamada recursiva

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
  if (numero === 0) {
    return 1;
  } else if (numero === 1) {
    return 1;
  } else {
    return numero * fatorial(numero - 1);
  }
}
console.log(fatorial(8));
