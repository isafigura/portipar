function adicionarItem() {
  const input = document.getElementById("item");
  const itemTexto = input.value.trim();

  if (itemTexto === "") {
    alert("Digite um item!");
    return;
  }

  const lista = document.getElementById("lista");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = itemTexto;

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "🗑️";
  botaoRemover.classList.add("remover");
  botaoRemover.onclick = () => {
    lista.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(botaoRemover);
  lista.appendChild(li);

  input.value = "";
  input.focus();
}
