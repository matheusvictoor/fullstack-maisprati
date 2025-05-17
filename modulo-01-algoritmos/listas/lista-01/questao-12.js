const prompt = require("prompt-sync")();

const num = parseInt(prompt("Insira um numero: "))

if (isNaN(num) || num < 0) {
    console.log("Entrada invalida!")
} else {
    for (let i = 1; i <= 10; i++){
        let res = i * num;
        console.log(`${num} x ${i} = ${res}`)
    }
}
