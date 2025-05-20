function converter() {
    let celsius = document.getElementById('celsius').value;
    let fahr = document.getElementById('fahr').value;

    if(celsius !== '' && !isNaN(celsius)) {
        document.getElementById('fahr').value = (celsius * 9/5) + 32;
    }

    if (fahr !== '' && !isNaN(fahr)) {
        document.getElementById('celsius').value = (fahr - 32) * 5 / 9;
    }
}

function limpar() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahr').value = '';
}