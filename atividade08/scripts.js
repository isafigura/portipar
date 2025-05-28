function verificarPrimo() {
    var numero = parseInt(document.getElementById('numero').value);
    var resultado = document.getElementById('resultado');

    if (isNaN(numero) || numero < 1) {
        resultado.textContent = "Por favor, insira um número inteiro positivo.";
        return;
    }

    if (numero == 1) {
        resultado.textContent = "1 não é considerado um número primo.";
        return;
    }

    var primo = true;
    for (var i = 2; i <= numero / 2; i++) {
        if (numero % i == 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        resultado.textContent = numero + " é um número primo!";
    } else {
        resultado.textContent = numero + " não é um número primo.";
    }
}