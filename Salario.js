var input = require("fs").readFileSync("stdin", "utf8");

const entrada = input.split('\n')

const numeroFuncionario = parseInt(entrada.shift())
const horasTrabalhadas = parseInt(entrada.shift())
const valorHora = parseFloat(entrada.shift()) 

function calculoSalario(horas, valor) {
    return horas * valor
}

console.log(`NUMBER = ${numeroFuncionario}`)
const calculo = calculoSalario(horasTrabalhadas, valorHora)

console.log(`SALARY = U$ ${calculo.toFixed(2)}`)