const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const cursoInput = document.querySelector("#cursos");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nameInput.value === "") {
    nameInput.classList.add("invalid");
    return;
  }

  if (emailInput == "" || !isEmailValid(emailInput.value)) {
    emailInput.classList.add("invalid");
    return;
  }

  if (phoneInput.value === "") {
    phoneInput.classList.add("invalid");
    return;
  }

  if (cursoInput.value === "") {
    cursoInput.classList.add("invalid");
    return;
  }

  function isEmailValid(email) {
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
      return true;
    }
    return false;
  }

  const numeroTelefone = "5591993821303";

  const mensagem = `Olá, gostaria de garantir minha pré-matrícula!\nNome: ${nameInput.value}\nEmail: ${emailInput.value}\nContato/Whatsapp: ${phoneInput.value}\nCurso: ${cursoInput.value}`;
  const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(
    mensagem
  )}`;

  window.location.href = linkWhatsapp;
});

nameInput.addEventListener("click", function () {
  nameInput.classList.remove("invalid");
});

emailInput.addEventListener("click", function () {
  emailInput.classList.remove("invalid");
});

phoneInput.addEventListener("click", function () {
  phoneInput.classList.remove("invalid");
});

cursoInput.addEventListener("click", function () {
  cursoInput.classList.remove("invalid");
});

const botaoWhatsapp = document.getElementById("botaoWhatsapp");

botaoWhatsapp.addEventListener("click", function () {
  const numeroTelefone = "5591993821303";
  const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=Olá%20,%20Gostaria%20de%20mais%20informações%20sobre%20os%20cursos`;

  window.location.href = linkWhatsapp;
});
