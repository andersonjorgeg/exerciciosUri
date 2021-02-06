var input = require("fs").readFileSync("stdin", "utf8");

const entrada = input.split('\n')

const entrada1 = entrada.shift().split(' ')
const entrada2 = entrada.shift().split(' ')

const x1 = parseFloat(entrada1.shift())
const y1 = parseFloat(entrada1.shift())
const x2 = parseFloat(entrada2.shift())
const y2 = parseFloat(entrada2.shift())

const distancia = function (a, b, c, d) {
    const diferenca1 = c - a
    const diferenca2 = d - b
    const distancia = Math.sqrt(Math.pow(diferenca1, 2) + Math.pow(diferenca2, 2))
    return distancia
}

console.log(distancia(x1, y1, x2, y2).toFixed(4))