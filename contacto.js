const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = form.querySelector('input[placeholder="Nome completo"]').value;
  const email = form.querySelector('input[placeholder="Email"]').value;
  const assunto = form.querySelector('input[placeholder="Assunto"]').value;
  const mensagem = form.querySelector('textarea').value;

  const texto = `
Olá TwinCode 👋
Meu nome é ${nome}.
Email: ${email}
Assunto: ${assunto}

Mensagem:
${mensagem}
  `;

  const numero = "258844573250"; // seu número
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  feedback.style.color = "#4f7cff";
  feedback.textContent = "A abrir WhatsApp...";

  setTimeout(() => {
    window.open(url, "_blank");
    feedback.textContent = "Redirecionado para o WhatsApp ✔";
    form.reset();
  }, 800);
});
