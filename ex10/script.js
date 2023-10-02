function advinhe() {

    var numPensado = Math.round(Math.random() * 10);

    var numDaTentativa = 1;

    alert('Eu penso em um numero, e você tenta advinhar, Ok?')

    while (numDaTentativa <= 3) {
        var chute = prompt('Já pensei, Qual você acha que é?')

        if (chute == numPensado) {
            alert('Acertou!!! O numero que pensei foi mesmo o ' + numPensado);
            break;
        }
        else {
            alert('Voce errou. Tente mais uma vez.');
        }

        if (numDaTentativa >= 3) {
            alert('Game-Over. O numero que pensei foi o ' + numPensado);
        }

        numDaTentativa++;
    }

}