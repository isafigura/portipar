let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval); 

  const min = parseInt(document.getElementById('minutes').value) || 0;
  const sec = parseInt(document.getElementById('seconds').value) || 0;

  let totalSeconds = min * 60 + sec;

  if (totalSeconds <= 0) {
    document.getElementById('message').textContent = "Informe um tempo válido.";
    document.getElementById('timer').textContent = "00:00";
    return;
  }

  document.getElementById('message').textContent = ""; 

  countdownInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('timer').textContent = "00:00";
      document.getElementById('message').textContent = "⏰ Tempo esgotado!";
    } else {
      totalSeconds--;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      document.getElementById('timer').textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }, 1000);
}
