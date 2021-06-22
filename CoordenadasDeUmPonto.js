var input = require("fs").readFileSync("stdin", "utf8");

let linha = input.split(' ')

let x = parseFloat(linha[0])

let y = parseFloat(linha[1])

if (x > 0 && y > 0) {
    console.log('Q1')
} else if (x < 0 && y > 0){
    console.log('Q2')
} else if (x < 0 && y < 0){
    console.log('Q3')
} else if (x > 0 && y < 0){
    console.log('Q4')
} else if (x === 0.0 && y === 0.0){
    console.log('Origem')
} else if (x > 0 || x < 0 ) {
    console.log('Eixo X')
} else if (y > 0 || y < 0) {
    console.log('Eixo Y')
}