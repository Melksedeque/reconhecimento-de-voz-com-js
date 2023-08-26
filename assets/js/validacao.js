function validaChute(chute) {
    const numero = +chute

    if(Number.isNaN(numero)) {
        console.log("Número inválido")
    }

    if(numero > max || numero < min) {
        console.log("Número não permitido")
    }
}