 function adicionarItem() {
      const input = document.getElementById("item");
      const itemTexto = input.value.trim(); // <<< AQUI ESTAVA O ERRO

      if (itemTexto === "") {
        alert("Digite um item!");
        return;
      }

      const li = document.createElement("li");
      li.textContent = itemTexto;
      document.getElementById("lista").appendChild(li);
      input.value = "";
      input.focus();
    }