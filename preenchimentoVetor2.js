// Importa o módulo fs (File System) do Node.js e lê o arquivo stdin como uma string utf-8
var input = require("fs").readFileSync("stdin", "utf8");

// Divide a string de entrada pelos saltos de linha e armazena o resultado em uma variável
const entrada = input.split('\n');

// Converte o primeiro elemento da lista de entrada em um número inteiro e o armazena em uma variável
const t = parseInt(entrada);

// Cria um novo array com 1000 elementos
const n = new Array(1000);

// Itera sobre o array n e atribui a cada elemento o resto da divisão do índice pelo valor de t
for(let i = 0; i < 1000; i++) {
  n[i] = i % t;
}

// Itera novamente sobre o array n e imprime cada elemento com uma mensagem
for(let i = 0; i < 1000; i++) {
  console.log(`N[${i}] = ${n[i]}`)
}
