var input = require("fs").readFileSync("stdin", "utf8");

const entrada = input.split(' ')

const A = parseFloat(entrada.shift())
const B = parseFloat(entrada.shift())
const C = parseFloat(entrada.shift())

const areaTriangulo = (a, c) => a * c / 2
const areaCirculo = (c) => 3.14159 * Math.pow(c, 2)
const areaTrapezio = (a, b, c) => (a + b) / 2 * c
const areaQuadrado = (b) => Math.pow(b, 2)
const areaRetangulo = (a, b) => a * b

console.log(`TRIANGULO: ${areaTriangulo(A, C).toFixed(3)}`)
console.log(`CIRCULO: ${areaCirculo(C).toFixed(3)}`)
console.log(`TRAPEZIO: ${areaTrapezio(A, B, C).toFixed(3)}`)
console.log(`QUADRADO: ${areaQuadrado(B).toFixed(3)}`)
console.log(`RETANGULO: ${areaRetangulo(A, B).toFixed(3)}`)