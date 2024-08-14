let opcao;
do {
  opcao = prompt(`
  Escolha uma das opções abaixo: 
  1 - Calcular a área do retângulo
  2 - Sair do Programa.
  `);
  switch (opcao) {
    case "1":
      function areaDoRetangulo(base = 0, altura = 0) {
        return base * altura;
      }
      const base = Number(prompt("Digite a base: "));
      const altura = Number(prompt("Digite a altura: "));
      const total = areaDoRetangulo(base, altura);
      alert(total);
      break;
    case "2":
      alert("Saindo do Programa...");
      break;
    default:
      alert("Opção inválida. Tente novamente.");
  }
} while (opcao !== "2");
