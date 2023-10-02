function media() {

    let soma = 0;
    let contagem = 0;
    let continuar = "sim" || "nao";

    while (continuar == 'sim') {

        let numero = parseInt(prompt("Insira um número"));


        continuar = prompt("Deseja continuar?").toLowerCase();
        
        soma += numero;
        contagem++;
    }

    let media = soma / contagem;

    alert("A soma dos números inseridos é " + soma + " e sua média é " + media);

}
