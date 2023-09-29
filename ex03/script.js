function adicao(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = n1 + n2;

    document.getElementById("resultado").innerHTML = n1 + " + " + n2 + " = " + resultado;

    layout.style.transform = 'rotateY(180deg)';
}

function subtracao(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = n1 - n2;

    document.getElementById("resultado").innerHTML = n1 + " - " + n2 + " = " + resultado;

    layout.style.transform = 'rotateY(180deg)';
}

function multiplicacao(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = n1 * n2;

    document.getElementById("resultado").innerHTML = n1 + " x " + n2 + " = " + resultado;

    layout.style.transform = 'rotateY(180deg)';
}

function divisao(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = n1 / n2;

    document.getElementById("resultado").innerHTML = n1 + " ÷ " + n2 + " = " + resultado;

    layout.style.transform = 'rotateY(180deg)';
}

function calcAgain() {

    location.href = "index.html";
}