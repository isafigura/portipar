const numeroSecreto = Math.random() * 100 + 1;


    function verificarPalpite() {
      const input = document.getElementById("palpite");
      const palpite = Number(input.value);

      if (palpite < 1 || palpite > 100) {
        alert("Digite um número entre 1 e 100.");
       
      }

      if (palpite === numeroSecreto) {
        document.getElementById("mensagem").innerHTML = 
          `<strong>Parabéns!</strong> Você acertou o número <strong>${numeroSecreto}</strong> em <strong>${tentativas}</strong> tentativas.`;
      } else if (palpite < numeroSecreto) {
        document.getElementById("mensagem").textContent = "O número é maior";
      } else {
        document.getElementById("mensagem").textContent = "O número é menor";
      }
    }