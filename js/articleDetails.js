import { baseUrl } from "./components/constants/baseUrl.js";
import showMessage from "./components/showMessage.js";
import { createNav } from "./components/createNav.js";
import { createFooter } from "./components/createFooter.js";

createNav();
createFooter();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = baseUrl + "articles/" + id + "?populate=image";

(async function () {
  const container = document.querySelector(".details__container");

  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    const articles = json.data.attributes;

    container.innerHTML += `<div class="card-body">
                                <h1>${articles.title}</h1>
                                <img src="http://localhost:1338${articles.image.data.attributes.url}" class="card-img-top img__article-details" alt="${articles.image.data.attributes.alternativeText}">
                                <hr>
                                <p class="card-text paragraph__details">${articles.content}</p>
                            </div>`;
  } catch (error) {
    console.log(error);
    showMessage("warning", "Ops! There is a problem with retrieving data from the API", ".message-container");
  }
})();
