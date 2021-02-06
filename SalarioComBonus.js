var input = require("fs").readFileSync("stdin", "utf8");

const entrada = input.split('\n')

const nome = entrada.shift()
const salarioFixo = parseFloat(entrada.shift())
const totalVendas = parseFloat(entrada.shift())

const comissao = 0.15
const salarioTotal = totalVendas * comissao + salarioFixo  

console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`)