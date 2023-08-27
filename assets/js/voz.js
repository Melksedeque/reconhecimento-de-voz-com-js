const elementoChute = document.querySelector('[data-mensagem="chute"]')
const elementoMensagem = document.querySelector('[data-mensagem="mensagem"]')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    validaChute(chute)
    exibeChute(chute)
}

function exibeChute(numero) {
    elementoChute.innerHTML = `
        <h3>Você disse:</h3>
        <div class="box valor">${numero}</div>
    `
}