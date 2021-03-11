var input = require("fs").readFileSync("stdin", "utf8");

let valor =  parseInt(input)

function calculoAno(valor) {
    const ano = parseInt(valor / 365)
    return ano
}

function calculoMes(valor) {
    let resto = valor % 365
    const mes = parseInt(resto / 30)
    return mes
}

function calculoDia(valor) {
    let dias = valor % 365
    dias %= 30
    return dias

}

console.log(`${calculoAno(valor)} ano(s)`)
console.log(`${calculoMes(valor)} mes(es)`)
console.log(`${calculoDia(valor)} dia(s)`) 
