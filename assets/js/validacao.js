function validaChute(chute) {
    const numero = +chute
    
    if(Number.isNaN(numero)) {
        elementoMensagem.innerText = "Número inválido"

        if(chute == "game over") {
            document.body.innerHTML = `
                <main class="page-main">
                    <h1>GAME OVER!</h1>
                    <h2>Você encerrou o jogo</h2>
                    <p>Clique no botão abaixo para recomeçar:</p>
                    <button class="btn btn-lg btn-outline-light mt-4" id="jogar_novamente">Jogar novamente</button>
                </main>
            `
        }
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