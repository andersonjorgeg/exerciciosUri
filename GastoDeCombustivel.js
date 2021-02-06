var input = require("fs").readFileSync("stdin", "utf8");

const entrada = input.split('\n')

const horasViagem = parseInt(entrada.shift())
const velocidadeMedia = parseInt(entrada.shift())

const calculoCombustivel = function (horasViagem, velocidadeMedia) {
    const distancia = horasViagem * velocidadeMedia
    const qtdLitros = distancia / 12
    return qtdLitros
}

console.log(calculoCombustivel(horasViagem, velocidadeMedia).toFixed(3))
