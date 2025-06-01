function sortearNome() {
    const entrada = document.getElementById("entradaNomes").value;
    const nomes = entrada.split(",").map(nome => nome.trim()).filter(nome => nome !== "");

    if (nomes === 0) {
        document.getElementById("resultado").textContent = "Por favor, insira pelo menos um nome.";
        return;
    }

    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById("resultado").textContent = "Nome sorteado: " + sorteado;
}
