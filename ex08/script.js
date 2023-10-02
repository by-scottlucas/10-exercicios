let palavra = document.getElementById("palavra").toLowerCase();

function check(palavra) {

    let RegExp = /[^a-zA-Z]/g;

    let formatPalav = palavra.replace(RegExp, "");

    let inversePalav = formatPalav.split("").reverse().join("");

    return formatPalav === inversePalav;
}

if (check(palavra)) {
    document.getElementById("resultado").innerHTML = `A palavra ${palavra} é um palíndromo.`;
} else {
    document.getElementById("resultado").innerHTML = `A palavra ${palavra} não é um palíndromo.`;
}