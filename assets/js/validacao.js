function validaChute(chute) {
    const numero = +chute
    
    if(Number.isNaN(numero) && numero != "game over") {
        elementoMensagem.innerText = "Número inválido"
        return
    } else if(numero == "game over") {
        elementoMensagem.innerText = "Game Over!"
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
                <button class="btn btn-lg btn-outline-light mt-5" id="jogar_novamente">Jogar novamente</button>
            </main>
        `
    }
}

document.body.addEventListener('click', (e) => {
    if(e.target.id === 'jogar_novamente') {
        window.location.reload()
    }
})