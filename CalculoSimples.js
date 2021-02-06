var input = require("fs").readFileSync("stdin", "utf8");

const entrada = input.split('\n')

const infoItem1 = entrada.shift().split(' ')
const infoItem2 = entrada.shift().split(' ')

const codigo1 = parseInt(infoItem1.shift())
const numeroPecas1 = parseInt(infoItem1.shift())
const valorUnitario1 = parseFloat(infoItem1.shift())

const codigo2 = parseInt(infoItem2.shift())
const numeroPecas2 = parseInt(infoItem2.shift())
const valorUnitario2 = parseFloat(infoItem2.shift())

const totalProdutos = (numeroPecas1 * valorUnitario1) + (numeroPecas2 * valorUnitario2)


console.log(`VALOR A PAGAR: R$ ${totalProdutos.toFixed(2)}`)

