var input = require("fs").readFileSync("stdin", "utf8");

let segundos = parseInt(input)

const hora = parseInt(segundos / 3600)
let resto = segundos % 3600
const minuto = parseInt(resto / 60)
resto = resto % 60
const segundo = parseInt(resto / 1)

console.log(`${hora}:${minuto}:${segundo}`)
