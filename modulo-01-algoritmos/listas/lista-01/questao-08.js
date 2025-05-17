
// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

const num1 = parseInt(prompt('Informe o primeiro numero: '));
const num2 = parseInt(prompt('Informe o segundo numero: '));

if (isNaN(num1) || isNaN(num2) || num1 === num2) {
  console.log('Entrada invalida!');
} else {
  if (num1 < num2) {
    console.log(`${num2}, ${num1}`)
  } else {
    console.log(`${num1}, ${num2}`)
  }
}
