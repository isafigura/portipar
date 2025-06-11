let cardSelecionado = null;

function mudar(tela) {
  document.getElementById('tela').src = tela;

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.remove('selecionado'));

  cardSelecionado = event.currentTarget;
  cardSelecionado.classList.add('selecionado');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById('voltarBtn').style.display = 'block';
}

function voltarParaCard() {
  if (cardSelecionado) {
    cardSelecionado.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    setTimeout(() => {
      document.getElementById('voltarBtn').style.display = 'none';
    }, 1000);
  }
}
