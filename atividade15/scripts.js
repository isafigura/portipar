document.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const section = document.getElementById(targetId);
        section.classList.toggle("show");
      });
    });