const min = 1
const max = 100

const numeroSecreto = gerarNumero()
const menorValor = document.querySelector('[data-valor="menor"]')
const maiorValor = document.querySelector('[data-valor="maior"]')

menorValor.innerHTML = min
maiorValor.innerHTML = max

console.log(menorValor)

function gerarNumero() {
    return parseInt(Math.random() * (max + 1))
}

console.log(numeroSecreto)