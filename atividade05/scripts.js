function validar(){
    let numero = document.getElementById('numero').value;


    if(numero.length == 11){
        document.getElementById('validar').innerHTML = 'CPF válido'
    } else {
        document.getElementById('validar').innerHTML = 'CPF inválido'
    }
}

function limpar() {
    document.getElementById('numero').value = '';
    document.getElementById('validar').innerHTML = '';
}