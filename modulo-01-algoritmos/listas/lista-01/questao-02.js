const prompt = require("prompt-sync")();

const entrada = prompt("Digite uma idade: ");

if (typeof parseInt(entrada) !== "number" || isNaN(entrada)) {
  console.log("Entrada invalida!");
} else {
  idade = parseInt(entrada);
  
  if (idade >= 0 && idade <= 130){
    if (idade < 12) {
      console.log("crianca");
    } else if (idade < 18) {
      console.log("adolescente");
    } else if (idade < 60) {
      console.log("adulto");
    } else {
      console.log("idoso");
    }
  } else {
    console.log("Idade invalida!");
  }
}
