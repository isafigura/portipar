let lista = []

function adicionar() {
    let tarefa = document.getElementById('tarefa').value;
    
    lista.push(tarefa);
    

    if (tarefa !== '') {
        document.getElementById('lista').innerHTML += tarefa + '<button onclick="concluir(tarefa)">Concluída</button>' + '<button onclick="remover()">Remover</button>'+ '<br>';
        
    }
    
}

function concluir(tarefa) {
    document.getElementById('tarefa').classList.remove('naoConcluida');
    document.getElementById('tarefa').classList.add('concluida');
}
