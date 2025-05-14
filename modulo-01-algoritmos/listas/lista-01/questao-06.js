// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

const prompt = require("prompt-sync")();

console.log("Informa os lados do triangulo: ");
const a = parseInt(prompt("Lado A: "));
const b = parseInt(prompt("Lado B: "));
const c = parseInt(prompt("Lado C: "));

if (a <= 0 || isNaN(a) || b <= 0 || isNaN(b) || c <= 0 || isNaN(c)) {
  console.log("\nInsira um valor valido!");
}

function validaLados(a, b, c) {
  if (a + b < c) {
    return false;
  } else if (a + c < b) {
    return false;
  } else if (b + c < a) {
    return false;
  }
  return true;
}

if (validaLados(a, b, c)) {
  if (a === b && b === c) {
    console.log("\nO triangulo é do tipo EQUILATERO ");
  } else if (a === b || b === c || c === a) {
    console.log("\nO triangulo é do tipo ISOSCELES");
  } else {
    console.log("\nO triangulo é do tipo ESCALENO");
  }
} else {
  console.log("\nTriangulo invalido!");
}
