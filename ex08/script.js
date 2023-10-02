let palavra = document.getElementById("palavra").toLowerCase();

function palindromo() {

    let RegExp = /[^a-zA-Z]/g;

    let formatPalav = palavra.replace(RegExp, "");

    let inversePalav = formatPalav.split("").reverse().join("");

    return formatPalav === inversePalav;
}

if (palindromo()) {
    document.getElementById("resultado").innerHTML = `A palavra ${palavra} é um palíndromo.`;
} else {
    document.getElementById("resultado").innerHTML = `A palavra ${palavra} não é um palíndromo.`;
}