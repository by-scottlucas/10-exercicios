function somaNumeros() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let soma = n1 + n2;


    if (n1 === n1 && n2 === n2) {
        document.getElementById("resultado").innerHTML = n1 + " + " + n2 + " = " + soma;
    } else {
        document.getElementById("resultado").innerHTML = "Os campos não foram preenchidos";
    }
}