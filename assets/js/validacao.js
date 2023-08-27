function validaChute(chute) {
    const numero = +chute

    if(Number.isNaN(numero)) {
        elementoMensagem.innerText = "Número inválido"
        return
    }

    if(numero > max || numero < min) {
        elementoMensagem.innerText = `Número não permitido: O número secreto está entre ${min} e ${max}`
        return
    }

    if(numero < numeroSecreto) {
        elementoMensagem.innerHTML = 'O número secreto é maior <i class="fa fa-light fa-arrow-up"></i>'
        return
    }

    if(numero > numeroSecreto) {
        elementoMensagem.innerHTML = 'O número secreto é menor <i class="fa fa-light fa-arrow-down"></i>'
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <main class="page-main">
                <h1>Você acertou!</h1>
                <h2>O número secreto era: ${numeroSecreto}</h2>
            </main>
        `
    }
}