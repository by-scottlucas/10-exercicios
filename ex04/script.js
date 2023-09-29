function fatorial() {

    let num = parseInt(document.getElementById("num").value);

    for (let i = num - 1; i >= 1; i--) {

        num = num * i;

        document.getElementById("resultado").innerHTML = `O número fatorial é: ${num}`;

        layout.style.transform = "rotateY(180deg)";

    }
}

function checkAgain() {
    location.href = "index.html";
}