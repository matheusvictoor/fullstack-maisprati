// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();

const input = parseInt(prompt('Digite um número: '));
if (isNaN(input)) {
    console.log('Entrada inválida!');
} else {
    for (let i = 0; i < 10; i++) {
        console.log(input);
    }
}