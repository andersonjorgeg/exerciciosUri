var input = require("fs").readFileSync("stdin", "utf8");

let entrada = input.split('\n')

let A = parseInt(entrada.shift())
let B = parseInt(entrada.shift())
let C = parseInt(entrada.shift())
let D = parseInt(entrada.shift())

let diferenca = (A * B - C * D)

console.log(`DIFERENCA = ${diferenca}`)