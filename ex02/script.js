function parOuImpar() {

    let num = parseInt(document.getElementById("num").value);

    if (num % 2 === 0) {
        document.getElementById("resultado").innerHTML = `O número ${num} é um número par.`;
    } else if (num % 1 === 0) {
        document.getElementById("resultado").innerHTML = `O número ${num} é  um número ímpar.`;
    } else {
        document.getElementById("resultado").innerHTML = `O campo está vazio.<br> Insira um número.`;
    }

}