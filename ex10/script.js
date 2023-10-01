function advinhe() {

    let numPensado = Math.round(Math.random() * 100);

    for (let i = 1; i <= 3 ; i++) {

        tentativas = 3-i;

        let chute = parseInt(document.getElementById("num").value);

        if (chute == numPensado) {
            document.getElementById("resultado").innerHTML = `Acertou!!! O numero que pensei foi mesmo o ${numPensado}`;
            break;
        }

        else {
            document.getElementById("resultado").innerHTML = `Voce errou. Tente novamente. Tentativas${tentativas}`;
        }

        if (tentativas >= 3 && chute != numPensado) {
            document.getElementById("resultado").innerHTML = `Game-Over.<br> O numero que pensei foi o ${numPensado}`;
        }
    }

}