var input = require("fs").readFileSync("stdin", "utf8");
var linhas = input.split('\n');

let entrada = input.split(' ')

let nota1 = parseFloat(entrada.shift())
let nota2 = parseFloat(entrada.shift())
let nota3 = parseFloat(entrada.shift())
let nota4 = parseFloat(entrada.shift())

let peso1 = 2.0
let peso2 = 3.0
let peso3 = 4.0
let peso4 = 1.0

function mediaPonderada(){
const media = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4)) / (peso1 + peso2 + peso3 + peso4)
    return parseFloat(media)
}
console.log(`Media: ${mediaPonderada().toFixed(1)}`)

if (mediaPonderada() >= 7.0) {
    console.log('Aluno aprovado.')
} 
else if (mediaPonderada() < 4.9) {
    console.log('Aluno reprovado.')
} 
else{
    console.log('Aluno em exame.')
    let recuperacao = linhas.pop()
    console.log(`Nota do exame: ${parseFloat(recuperacao)}`)
    let mediaFinal = (mediaPonderada() + recuperacao) / 2
    if (mediaFinal >= 5.0) {
        console.log('Aluno aprovado.')
        console.log(`Media final: ${mediaFinal.toFixed(1)}`)
    }
    else{
        console.log('Aluno reprovado.')
        console.log(`Media final: ${mediaFinal.toFixed(1)}`)
    }
}


