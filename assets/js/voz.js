const elementoChute = document.querySelector('[data-mensagem="chute"]')
const elementoMensagem = document.querySelector('[data-mensagem="mensagem"]')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    fala = e.results[0][0].transcript
    chute = mapearNumeros(fala)
    validaChute(chute)
    exibeChute(chute)
}

function exibeChute(numero) {
    elementoChute.innerHTML = `
        <h3>Você disse:</h3>
        <div class="box valor">${numero}</div>
    `
}

recognition.addEventListener('end', () => recognition.start())