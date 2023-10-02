function media() {

    let soma = "";
    let contagem = 0;
    let continuar = "sim" || "nao";

    while (continuar == 'sim') {

        let numero = parseInt(prompt("Insira um número"));

        contagem++;
        
        soma = numero + numero;

        continuar = prompt("Deseja continuar?").toLowerCase();
    }

    let media = soma / contagem;

    alert("Contagem: " + contagem + " Soma: " + soma + " Media" + media);

}
