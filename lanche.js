var input = require("fs").readFileSync("stdin", "utf8");

const entrada = input.split(' ')

const codigo = parseInt(entrada.shift())
const quantidade = parseInt(entrada.shift())

let total = 0
switch (codigo) {
    case 1:
        const cachorroQuente = 4.00
        total = cachorroQuente * quantidade
        console.log(`Total: R$ ${total.toFixed(2)}`)
        break;
    case 2:
        const xSalada = 4.50
        total = xSalada * quantidade
        console.log(`Total: R$ ${total.toFixed(2)}`)
        break;
    case 3:
        const xBacon = 5.00
        total = xBacon * quantidade
        console.log(`Total: R$ ${total.toFixed(2)}`)
        break;
    case 4:
        const torradaSimples = 2.00
        total = torradaSimples * quantidade
        console.log(`Total: R$ ${total.toFixed(2)}`)
        break;
    case 5:
        const refrigerante = 1.50
        total = refrigerante * quantidade
        console.log(`Total: R$ ${total.toFixed(2)}`)
        break;
    default:
        break;
}

