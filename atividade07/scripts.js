const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
  const input = document.getElementById("palpite");
  const palpite = Number(input.value);

  if (palpite < 1 || palpite > 100) {
    alert("Digite um número entre 1 e 100.");
    return;
  }

  tentativas++; 
  const mensagem = document.getElementById("mensagem");

  if (palpite === numeroSecreto) {
    mensagem.innerHTML = `<strong>Parabéns!</strong> Você acertou o número <strong>${numeroSecreto}</strong> em <strong>${tentativas}</strong> tentativas.`;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "O número é maior.";
  } else {
    mensagem.textContent = "O número é menor.";
  }
}