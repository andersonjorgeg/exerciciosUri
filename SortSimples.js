var input = require("fs").readFileSync("stdin", "utf8");

let colunas = input.split(' ') 

let numero1 = colunas[0]
let numero2 = colunas[1]
let numero3 = colunas[2]
let numero4 = colunas[3]

let semOrdem = [numero1, numero2, numero3, numero4]
let ordenado = [numero1, numero2, numero3, numero4]
/* ordenado.sort((a, b) => a - b) */

for(let i = 0; i < ordenado.length; i++){
  for(let j = i + 1; j < ordenado.length; j++){
    if(ordenado[i] > ordenado[j]) {
      let aux = ordenado[i];
      ordenado[i] = ordenado[j];
      ordenado[j] = aux;
    }
  }
}

console.log(Number(ordenado[0]))
console.log(Number(ordenado[1]))
console.log(Number(ordenado[2]))
console.log(Number(ordenado[3]))
console.log()
console.log(Number(semOrdem[0]))
console.log(Number(semOrdem[1]))
console.log(Number(semOrdem[2]))
console.log(Number(semOrdem[3]))
