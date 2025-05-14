// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

const input = prompt('Escolha uma das opções de 1 a 3: ');

switch (input) {
    case '1':
        console.log('Opção 1 selecionada');
        break;
    case '2':
        console.log('Opção 2 selecionada');
        break;
    case '3':
        console.log('Opção 3 selecionada');
        break;
    default:
        console.log('Opção inválida');
        break;
}