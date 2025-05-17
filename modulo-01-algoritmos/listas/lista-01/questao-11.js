const prompt = require('prompt-sync')();

let sum = 0
for (let i = 0; i < 5; i++) {
    const input = parseInt(prompt('Digite um número: '));
    if (isNaN(input)) {
        console.log('Entrada inválida!');
        break
    } else {
        sum += input
    }
}

if (sum > 0) {
    console.log(`O total é: ${sum}`);
}