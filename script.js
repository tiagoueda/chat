const form = document.querySelector("#message-form");
const input = document.querySelector("#message-input");
const messages = document.querySelector("#messages");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = input.value;
  messages.value += `Eu: ${message}\n`;
  input.value = "";
  messages.scrollTop = messages.scrollHeight;
});

input.focus();