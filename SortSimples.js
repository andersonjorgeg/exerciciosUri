var input = require("fs").readFileSync("stdin", "utf8");

let colunas = input.split(' ') 

let numero1 = colunas[0]
let numero2 = colunas[1]
let numero3 = colunas[2]

let semOrdem = [numero1, numero2, numero3]
let ordenado = [numero1, numero2, numero3]
ordenado.sort((a, b) => a - b)

console.log(Number(ordenado[0]))
console.log(Number(ordenado[1]))
console.log(Number(ordenado[2]))
console.log()
console.log(Number(semOrdem[0]))
console.log(Number(semOrdem[1]))
console.log(Number(semOrdem[2]))
