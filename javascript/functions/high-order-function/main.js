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

const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];
const listaDeNomes = [];
personagens.map((pessoa) => {
  listaDeNomes.push(pessoa.nome);
});

console.log(listaDeNomes);
