var input = require("fs").readFileSync("stdin", "utf8");

const entrada = input.split(' ')

const numero1 = parseInt(entrada.shift())
const numero2 = parseInt(entrada.shift())
const numero3 = parseInt(entrada.shift())

const maior = function (a, b, c) {
    const maiorAB = (a + b + Math.abs(a - b)) / 2
    const maiorABC = (maiorAB + c + Math.abs(maiorAB - c))/2
    return maiorABC
}

console.log(`${maior(numero1, numero2, numero3)} eh o maior`)