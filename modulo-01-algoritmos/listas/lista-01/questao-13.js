const prompt = require("prompt-sync")()

let sum = 0;
let count = 0;

do {
    input = parseFloat(prompt("Digite algum valor: "))
    if (isNaN(input)) {
        console.log("Entrada invalida")
        break
    }
    sum += input
    if (input !== 0) {
        ++count
    }
} while(input !== 0)
    
if (count > 0) {
    const middle = sum / count
    console.log(`A media dos valores inseridos eh: ${middle.toFixed(2)}`)    
}