var input = require("fs").readFileSync("stdin", "utf8");

let entrada = input.split(' ')

const A = parseInt(entrada[0])
const B = parseInt(entrada[1])
const C = parseInt(entrada[2])
const D = parseInt(entrada[3])

const CD = C + D
const AB = A + B

if (B > C && D > A && CD > AB) {
    if (C > 0 && D > 0) {
        if (A % 2 === 0) {
            console.log('Valores aceitos')
        }
    }
} else {
    console.log('Valores nao aceitos')
}