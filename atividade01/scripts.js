function calcularIMC () {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value; 
    let resultado = peso/(altura * altura);

    if (peso == '' || altura == '') {
        document.getElementById('resultado').innerHTML = "Por favor, insira os dados necessários";
    }

    if (resultado < 18.5) {
    document.getElementById('resultado').innerHTML = "Abaixo do peso";
    } else if (resultado >= 18.5 && resultado < 25) {
       document.getElementById('resultado').innerHTML = "Peso normal"; 
    } else if (resultado >= 25 && resultado < 30) {
       document.getElementById('resultado').innerHTML = "Sobrepeso";
    }else if (resultado >= 30 && resultado < 35) {
       document.getElementById('resultado').innerHTML = "Obesidade grau I";
    }else if (resultado >= 35 && resultado < 40) {
       document.getElementById('resultado').innerHTML = "Obesidade grau II";
    }else if (resultado >= 40) {
       document.getElementById('resultado').innerHTML = "Obesidade grau III";
    }
}

function limpar() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerHTML = '';
}
