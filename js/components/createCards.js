export function createCards() {
  const container = document.querySelector(".container__weekly");

  for (let i = 0; i < json.data.length; i++) {
    container.innerHTML += `<div>${json.data[i].attributes.content}</div>`;
  }
}
