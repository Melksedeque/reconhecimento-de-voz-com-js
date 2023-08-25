const elementoChute = document.querySelector('[data-mensagem="chute"]')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    console.log(chute)
    exibeChute(chute)
}

function exibeChute(numero) {
    elementoChute.innerHTML = `
        <h3>Você disse:</h3>
        <div class="box valor">${$numero}</div>
        <div class="alert">O número secreto é maior <i class="fa fa-light fa-arrow-up"></i></div>
    `
}