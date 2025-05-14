// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require("prompt-sync")();

const peso = parseFloat(prompt("Insira seu peso em kg: "));
const altura = parseFloat(prompt("Insira sua altura em metros: "));

if (isNaN(altura) || isNaN(peso) || peso <= 0 || altura <= 0) {
  console.log("Entrada invalida!");
} else {
  const imc = peso / altura ** 2;
  if (imc < 18.5) {
    console.log("baixo peso");
  } else if (imc < 25) {
    console.log("peso normal");
  } else if (imc < 30) {
    console.log("sobrepeso");
  } else {
    console.log("obesidade");
  }
}
