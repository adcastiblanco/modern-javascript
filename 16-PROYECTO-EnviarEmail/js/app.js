// Variables
const form = document.querySelector("#enviar-mail");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#asunto");
const messageInput = document.querySelector("#mensaje");
const btnEnviar = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");

callEventListeners();
function callEventListeners() {
  document.addEventListener("DOMContentLoaded", initializeApp);
  emailInput.addEventListener("blur", validateInput);
  subjectInput.addEventListener("blur", validateInput);
  messageInput.addEventListener("blur", validateInput);
  btnEnviar.addEventListener("click", sendForm);
  btnReset.addEventListener("click", resetForm);
}

// Functions

function initializeApp() {
  console.log("Inicializando APp");
}

function validateInput(e) {
  if (e.target.value.length > 0) {
    e.target.classList.remove("border-red-500");
    e.target.classList.add("border-green-500");
    const errorMessage = document.querySelector(".error");
    if (errorMessage) document.querySelector(".error").remove();
  } else {
    e.target.classList.remove("border-green-500");
    e.target.classList.add("border", "border-red-500");
    showErrorMessage("Todos los campos deben estar llenos");
  }
  let regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (e.target.type === "email") {
    if (regexEmail.test(e.target.value)) {
      e.target.classList.remove("border-red-500");
      e.target.classList.add("border-green-500");
      const errorMessage = document.querySelector(".error");
      if (errorMessage) document.querySelector(".error").remove();
    } else {
      e.target.classList.add("border-red-500");
      e.target.classList.remove("border-green-500");
      showErrorMessage("El email no es valido");
    }
  }
  if (
    regexEmail.test(emailInput.value) &&
    subjectInput.value &&
    messageInput.value
  ) {
    btnEnviar.classList.remove("opacity-50", "cursor-not-allowed");
    btnEnviar.disabled = false;
  }
}

function showErrorMessage(message) {
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  paragraph.classList.add(
    "border",
    "border-red-500",
    "text-red-500",
    "bg-red-100",
    "p-3",
    "mt-5",
    "text-center",
    "error"
  );
  if (document.querySelectorAll(".error").length === 0) {
    form.appendChild(paragraph);
  }
}

function sendForm(e) {
  e.preventDefault();
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  setTimeout(() => {
    spinner.style.display = "none";
    const messageSuccesfull = document.createElement("p");
    messageSuccesfull.classList.add(
      "text-center",
      "text-white",
      "bg-green-500",
      "font-bold",
      "p-2",
      "my-3"
    );
    messageSuccesfull.innerText = "Correo enviado exitosamente";
    form.insertBefore(messageSuccesfull, spinner);
    setTimeout(() => {
      messageSuccesfull.remove();
      resetForm();
    }, 4000);
  }, 3000);
}

function resetForm(e) {
  e.preventDefault();
  form.reset();
  btnEnviar.disabled = true;
  btnEnviar.classList.add("opacity-50", "cursor-not-allowed");
}
