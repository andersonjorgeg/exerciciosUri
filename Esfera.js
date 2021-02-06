var input = require("fs").readFileSync("stdin", "utf8");

const raio = input

const pi = 3.14159

function calculoVolume() {
    return (4 / 3.0) * pi * Math.pow(raio, 3)
}

const volume = calculoVolume()
console.log(`VOLUME = ${volume.toFixed(3)}`)
