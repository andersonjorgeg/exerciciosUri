var input = require("fs").readFileSync("stdin", "utf8");

const entrada = input.split('\n')

const distanciaTotal = parseInt(entrada.shift())
const totalCombustivelGasto = parseFloat(entrada.shift())

const consumoMedio = (a, b) => a / b

console.log(`${consumoMedio(distanciaTotal, totalCombustivelGasto).toFixed(3)} km/l`)