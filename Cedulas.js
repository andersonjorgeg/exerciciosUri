var input = require("fs").readFileSync("stdin", "utf8");

const entrada = input.split(' ')

let valor = parseInt(entrada.shift())

console.log(valor)

let qtdNotas = parseInt(valor / 100)
console.log(`${qtdNotas} nota(s) de R$ ${100},00`)
valor %= 100

qtdNotas = parseInt(valor / 50)
console.log(`${qtdNotas} nota(s) de R$ ${50},00`)
valor %= 50

qtdNotas = parseInt(valor / 20)
console.log(`${qtdNotas} nota(s) de R$ ${20},00`)
valor %= 20

qtdNotas = parseInt(valor / 10)
console.log(`${qtdNotas} nota(s) de R$ ${10},00`)
valor %= 10

qtdNotas = parseInt(valor / 5)
console.log(`${qtdNotas} nota(s) de R$ ${5},00`)
valor %= 5

qtdNotas = parseInt(valor / 2)
console.log(`${qtdNotas} nota(s) de R$ ${2},00`)
valor %= 2

qtdNotas = parseInt(valor / 1)
console.log(`${qtdNotas} nota(s) de R$ ${1},00`)









 
