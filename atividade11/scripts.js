function calcularNotas() {
    const valorInput = document.getElementById('valor');
    const resultadoDiv = document.getElementById('resultado');
    let valor = parseInt(valorInput.value);

    if (isNaN(valor) || valor < 2) {
        resultadoDiv.innerHTML = "<p>Digite um valor válido (mínimo R$2).</p>";
        return;
    }

    const notas = [100, 50, 20, 10, 5, 2];
    let resultado = '';

    notas.forEach(nota => {
        let qtd = Math.floor(valor / nota);
        if (qtd > 0) {
            resultado += `<p>${qtd} nota(s) de R$${nota}</p>`;
            valor %= nota;
        }
    });

    if (valor > 0) {
        resultado += "<p><strong>Não é possível sacar moedas. Valor restante: R$" + valor + "</strong></p>";
    }

    resultadoDiv.innerHTML = resultado;
}