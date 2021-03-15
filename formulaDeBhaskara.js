var input = require('fs').readFileSync('stdin', 'utf-8')

const entrada = input.split(' ')

const a = parseFloat(entrada[0])
const b = parseFloat(entrada[1])
const c = parseFloat(entrada[2])

function calculoDelta(...args) {
    const delta = Math.pow(b, 2) - 4 * a * c
    return delta
}

if (calculoDelta() < 0 || a === 0) {
    console.log('Impossivel calcular')
} else {
    const r1 = (-b + Math.sqrt(calculoDelta())) / (2 * a)
    console.log(`R1 = ${r1.toFixed(5)}`)
    const r2 = (-b - Math.sqrt(calculoDelta())) / (2 * a)
    console.log(`R2 = ${r2.toFixed(5)}`)
}


