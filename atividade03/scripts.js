function gerarTabuada() {
    let numero = document.getElementById('numero').value;
    let resultadoDiv = document.getElementById('resultado');

    let tabuada = `Tabuada do número ${numero}<br>`;
    for (let i = 1; i <= 10; i++){
        tabuada += `${numero} x ${i} = ${numero * i}<br>`;
    }

    resultadoDiv.innerHTML = tabuada;
}

function limpar() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}