const form = document.getElementById('passwordForm');
  const passwordInput = document.getElementById('password');
  const messages = document.getElementById('messages');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const password = passwordInput.value;

    const rules = [
      { regex: /.{8,}/, message: "Mínimo de 8 caracteres" },
      { regex: /[A-Z]/, message: "Pelo menos uma letra maiúscula" },
      { regex: /[a-z]/, message: "Pelo menos uma letra minúscula" },
      { regex: /\d/, message: "Pelo menos um número" },
      { regex: /[\W_]/, message: "Pelo menos um caractere especial" },
    ];

    messages.innerHTML = '';

    rules.forEach(rule => {
      const li = document.createElement('li');
      if (rule.regex.test(password)) {
        li.textContent = `✔ ${rule.message}`;
        li.classList.add('valid');
      } else {
        li.textContent = `✘ ${rule.message}`;
        li.classList.add('invalid');
      }
      messages.appendChild(li);
    });
  });