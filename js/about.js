import { baseUrl } from "./data/baseUrl.js";
import showMessage from "./components/showMessage.js";
import { createNav } from "./components/createNav.js";
import { createFooter } from "./components/createFooter.js";

createNav();
createFooter();

const url = baseUrl + "abouts" + "?populate=image";

(async function () {
  const container = document.querySelector(".about__container");

  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    const about = json.data;
    container.innerHTML = "";

    for (let i = 0; i < about.length; i++) {
      container.innerHTML += `<div class="card-body">
                                <h1>${about[i].attributes.title}</h1>
                                <img src="http://localhost:1338${about[i].attributes.image.data.attributes.url}" class="card-img-top img__article-details" alt="${about[i].attributes.image.data.attributes.alternativeText}">
                                <hr>
                                <p class="card-text paragraph__details">${about[i].attributes.content}</p>
                            </div>`;
    }
  } catch (error) {
    console.log(error);
  }
})();
