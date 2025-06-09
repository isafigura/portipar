function adicionar() {
  const input = document.getElementById('tarefa');
  const texto = input.value.trim();

  if (texto === '') return;

  const li = document.createElement('li');
  li.className = 'naoConcluida';

  const span = document.createElement('span');
  span.textContent = texto;

  const botaoConcluir = document.createElement('button');
  botaoConcluir.textContent = 'Concluída';
  botaoConcluir.onclick = () => {
    span.classList.toggle('concluida');
  };

  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'Remover';
  botaoRemover.onclick = () => {
    li.remove();
  };

  // Adiciona elementos
  li.appendChild(span);
  li.appendChild(botaoConcluir);
  li.appendChild(botaoRemover);

  document.getElementById('lista').appendChild(li);

  input.value = '';
}
