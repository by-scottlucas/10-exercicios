function palindromo() {

    let palavra = String(document.getElementById("palavra").value).toLowerCase();

    let inversePalav = palavra.split("").reverse().join("");

    if (palavra === inversePalav) {
        document.getElementById("resultado").innerHTML = `'${palavra}' é um palíndromo.`;
    } else {
        document.getElementById("resultado").innerHTML = `'${palavra}' não é um palíndromo.`;
    }
}