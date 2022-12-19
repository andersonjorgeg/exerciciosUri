// Importa o módulo fs (File System) do Node.js e lê o arquivo stdin como uma string utf-8
var input = require("fs").readFileSync("stdin", "utf8");

// Divide a string de entrada pelos saltos de linha e armazena o resultado em uma variável
const entrada = input.split("\n");

// Lê o valor de X
let x = parseFloat(entrada);

// Cria o vetor N com 100 elementos
let n = new Array(100);

// Armazena o valor de X na primeira posição do vetor N
n[0] = x;

// Preenche as posições subsequentes de N com a metade do valor armazenado na posição anterior
for (let i = 1; i < 100; i++) {
  n[i] = n[i - 1] / 2;
}

// Imprime o vetor N
for (let i = 0; i < 100; i++) {
  console.log(`N[${i}] = ${n[i].toFixed(4)}`);
}
