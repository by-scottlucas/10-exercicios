function contagem() {

    let num = parseInt(document.getElementById('num').value);

    const intervalo = setInterval(function () {

        if (num === 0) {
            clearInterval(intervalo);

            document.getElementById("msg").innerHTML = "Timer zerado.";
        } else {
            document.getElementById('timer').innerHTML = num;

            num--;
        }

    }, 1000);
}