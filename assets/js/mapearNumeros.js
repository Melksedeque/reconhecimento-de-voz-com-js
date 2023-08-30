function mapearNumeros(fala) {
    const mapNum = {
        'um': 1,
        'dois': 2,
        'três': 3,
        'quatro': 4,
        'cinco': 5,
        'seis': 6,
        'sete': 7,
        'oito': 8,
        'nove': 9
    };

    const palavras = fala.split(' ');
    const chute = palavras.map(palavra => mapNum[palavra] || palavra).join(' ');

    return chute
}