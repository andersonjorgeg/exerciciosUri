var input = require("fs").readFileSync("stdin", "utf8");

const entrada = input.split(' ')

const km = parseInt(entrada.shift())

const calculoMinutos = (a) => a * 2

console.log(`${calculoMinutos(km)} minutos`)