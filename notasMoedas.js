var input = require("fs").readFileSync("stdin", "utf8");

let valor = parseFloat(input)

const notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00]
const moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log("NOTAS:")

for (let nota of notas){
    let qtdNotas = Math.floor(valor / nota)
    console.log(`${qtdNotas} nota(s) de R$ ${nota}.00`)
    valor %= nota
}

console.log("MOEDAS:")
for (let moeda of moedas) {
    let qtdMoedas = Math.floor(valor / moeda)
    console.log(`${qtdMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`)
    valor %= moeda
}
