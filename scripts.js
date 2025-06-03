function verificarRespostas() {
    var pontuacao = 0;

    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value == 'c') {
        pontuacao = pontuacao + 1;
    }

    if (q2 && q2.value == 'c') {
        pontuacao = pontuacao + 1;
    }

    if (q3 && q3.value == 'b') {
        pontuacao = pontuacao + 1;
    }

    var resultado = document.getElementById("resultado");
    resultado.textContent = "Você acertou " + pontuacao + " de 3 perguntas.";
}

