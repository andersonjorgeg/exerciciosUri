var input = require("fs").readFileSync("stdin", "utf8");

let entrada = input.split("\r\n");

let nota1 = parseFloat(entrada.shift());
let nota2 = parseFloat(entrada.shift());
let nota3 = parseFloat(entrada.shift());
let nota4 = parseFloat(entrada.shift());

let notas = [];

if(nota1 > 10 || nota1 < 0) {
  console.log("nota invalida");
} else {
  notas.push(nota1);
}

if(nota2 > 10 || nota2 < 0) {
  console.log("nota invalida");
} else {
  notas.push(nota2);
}

if(nota3 > 10 || nota3 < 0) {
  console.log("nota invalida");
} else {
  notas.push(nota3);
}

if(nota4 > 10 || nota4 < 0) {
  console.log("nota invalida");
} else {
  notas.push(nota4);
}

let media = (notas[0] + notas[1]) / 2;
console.log("media = ", media.toFixed(2));
