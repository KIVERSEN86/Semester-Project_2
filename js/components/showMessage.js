export default function showMessage(messageType, message, target) {
  const element = document.querySelector(target);

  element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
