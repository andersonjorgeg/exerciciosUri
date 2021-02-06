var input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split("\n")

let A = parseFloat(valores.shift())
let B = parseFloat(valores.shift())
let C = parseFloat(valores.shift())

function media(a, b, c) {
    return (a * 2 + b * 3 + c * 5) / 10
}

console.log('MEDIA = ' + media(A, B, C).toFixed(1))