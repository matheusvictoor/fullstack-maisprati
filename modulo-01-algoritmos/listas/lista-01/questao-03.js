// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();

const entrada = prompt("Digite uma nota: ");

if (typeof parseInt(entrada) !== "number" || isNaN(entrada)) {
  console.log("Entrada invalida!");
} else {
  nota = parseInt(entrada);
  
  if (nota >= 0 && nota <= 10){
    if (nota < 5) {
      console.log("Reprovado");
    } else if (nota < 7) {
      console.log("Recuperacao");
    } else {
      console.log("Aprovado");
    }
  } else {
    console.log("Nota invalida!");
  }
}
