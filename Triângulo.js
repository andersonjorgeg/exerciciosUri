var input = require("fs").readFileSync("stdin", "utf8");

const entrada = input.split(' ');

const A = parseFloat(entrada.shift());
const B = parseFloat(entrada.shift());
const C = parseFloat(entrada.shift());

if(B + C > A && A + C > B && A + B > C) {
  console.log('Perimetro = '+ (A + B + C).toFixed(1));
} else{
  console.log('Area = '+ (C * (A + B) / 2).toFixed(1));
}
