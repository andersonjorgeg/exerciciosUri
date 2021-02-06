var input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split("\n")

let A = parseFloat(valores.shift())

let B = parseFloat(valores.shift())

let media = (A * 3.5 + B * 7.5) / (3.5 + 7.5)

console.log('MEDIA = ' + media.toFixed(5))
