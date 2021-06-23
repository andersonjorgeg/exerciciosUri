let pessoas = [
    {
        nome: 'Matheus', 
        idade: 29
    },
    {
        nome: 'Pedro', 
        idade: 18
    },
    {
        nome: 'Maria', 
        idade: 40
    },
    {
        nome: 'Alan', 
        idade: 63
    }
]

//sort

const ordenadoNomeCrescente = pessoas.sort((a, b) => {
    if(a.nome < b.nome){
        return -1
    } else {
        return true
    }
})

console.log(ordenadoNomeCrescente)

const ordenadoIdadeCrescente = pessoas.sort((a, b) => {
    if(a.idade < b.idade){
        return -1
    } else {
        return true
    }
})

console.log(ordenadoIdadeCrescente)

const ordenadoNomeDecrescente = pessoas.sort((a,b) => {
    if(a.nome > b.nome){
        return -1
    } else {
        return true
    }
})

console.log(ordenadoNomeDecrescente)

const ordenadoIdadeDecrescente = pessoas.sort((a,b) => {
    if(a.idade > b.idade) {
        return -1
    } else {
        return true
    }
})

console.log(ordenadoIdadeDecrescente)