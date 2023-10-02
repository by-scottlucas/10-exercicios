function advinhe() {

    let numPensado = Math.round(Math.random() * 100);

    let tentativas = 1;

    alert("Eu pensei em um número entre 0 e 100, você tem 5 chances para advinhar. Boa sorte!");

    while (tentativas <= 5) {
        let chute = prompt('Já pensei, Qual você acha que é?')

        if (chute == numPensado) {
            alert('Acertou!!! O numero que pensei foi mesmo o ' + numPensado);
            break;
        }
        else if (tentativas <= 4) {
            if (numPensado > chute) {
                alert('Voce errou, o número é maior. Tente mais uma vez.');
            }
            else {
                alert('Voce errou, o número é menor. Tente mais uma vez.');
            }
        }

        else {
            alert('Game-Over. O numero que pensei foi o ' + numPensado);
        }

        tentativas++;
    }

}