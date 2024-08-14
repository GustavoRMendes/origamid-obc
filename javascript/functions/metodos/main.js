// Métodos
const carro = {
  dirigir() {
    return "Dirigiu";
  },
};

console.log(carro);
console.log(carro.dirigir());

const pessoa = {
  nomeCompleto: "Gustavo Rodrigues Mendes",
  dizerNome() {
    return "Meu nome é " + this.nomeCompleto;
  },
};

console.log(pessoa);
console.log(pessoa.dizerNome());
