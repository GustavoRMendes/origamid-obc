// For, While, Do While
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
for (let cont = 0; cont <= 10; cont++) {
  console.log(cont);
}
const condicao = true;
while (condicao) {
  console.log("Enquanto a condição for verdadeira.");
}
// Executado pelo menos uma vez
do {
  console.log("Faça enquanto a condição for falsa");
} while (condicao === false);
