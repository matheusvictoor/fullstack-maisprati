const prompt = require('prompt-sync')();

const idade = parseInt(prompt('Digite uma idade: '));

if (typeOf(idade) != Number || idade < 0 || idade > 130) return

if (idade < 12) {
  console.log('criança');
} else (idade < 18) {
  console.log('adolescente');
} else (idade < 60) {
  console.log('adulto');
} else {
  console.log('idoso');
}

