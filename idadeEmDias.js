var input = require("fs").readFileSync("stdin", "utf8");

let valor =  parseInt(input)

const idade = [365, 30]

const ano = parseInt(valor / idade[0])
console.log(`${ano} ano(s)`)
valor %= idade[0]
const mes = parseInt(valor / idade[1])
console.log(`${mes} mes(es)`)
const dia = parseInt(valor % idade[1])
console.log(`${dia} dia(s)`)

