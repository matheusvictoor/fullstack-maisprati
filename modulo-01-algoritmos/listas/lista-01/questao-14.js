// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require("prompt-sync")()

const input = parseInt(prompt("Insira um numero para calcular o seu fatorial: "))

function fatorial(num) {
    let res = 1
    for (let i = num; i > 0; i--) {
        res *= i
    }
    return res
}

if (isNaN(input) || input < 0) {
    console.log("Entrada invalida")
} else {
    console.log(fatorial(input))
}