function tabuada() {

    let num = parseInt(document.getElementById("num").value);
    let tabuadaPreview = "";

    for (i = 1; i <= 10; i++) {
        let resultado = num * i;
        tabuadaPreview += `${num} x ${i} = ${resultado} <br>`;
    }

    document.getElementById("resultado").innerHTML = tabuadaPreview;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}
