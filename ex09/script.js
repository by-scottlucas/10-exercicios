function converteTemp() {

    let opcao = parseInt(document.getElementById("opcao").value);

    let temperatura = parseFloat(document.getElementById("temperatura").value);

    if (opcao == "1") {
        resultado = ((temperatura * 1.8) + 32).toFixed(1);

        document.getElementById("resultado").innerHTML = `${temperatura}°C graus Celsius para Fahrenheit são ${resultado}°F.`

    } else if (opcao == "2") {
        resultado = ((temperatura - 32) * 5 / 9).toFixed(1);

        document.getElementById("resultado").innerHTML = `${temperatura}°F Fehrenheit para Celsius são ${resultado}°C.`
    } else{
        document.getElementById("resultado").innerHTML = `Opção inválida.`
    }
}