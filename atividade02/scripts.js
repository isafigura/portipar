function calcularMedia() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let resultado = (nota1 + nota2 + nota3)/3;

    if (resultado >= 7) {
        document.getElementById('resultado').innerHTML = 'Aprovado!';
    } else if (resultado < 7 && resultado >= 5) {
        document.getElementById('resultado').innerHTML = 'Você está de exame';
    } else if (resultado < 5) {
        document.getElementById('resultado').innerHTML = 'Reprovado';
    }
}

function limpar() {
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    document.getElementById('resultado').innerHTML = '';
}