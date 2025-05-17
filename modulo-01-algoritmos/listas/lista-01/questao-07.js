// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.


const prompt = require("prompt-sync")();

const input = parseInt(prompt("Insira a quantiade de macas a serem compradas: "))

if (isNaN(input) || input <= 0) {
  console.log("Entrada invalida!")
} else {
  if (input < 12) {
    console.log(`O valor a ser pago eh R$: ${input * 0.3}`)
  } else {
    console.log(`O valor a ser pago eh R$: ${input * 0.25}`)
  }
}


