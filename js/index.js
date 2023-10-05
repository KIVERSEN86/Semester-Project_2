import showMessage from "./components/showMessage.js";
import { createNav } from "./components/createNav.js";
import { createFooter } from "./components/createFooter.js";
import { baseUrl } from "./components/constants/baseUrl.js";
import { signUp } from "./components/signUp.js";

createNav();
signUp();
createFooter();

const postsUrl = baseUrl + "articles?populate=image";

(async function () {
  const container = document.querySelector(".container__weekly");
  try {
    const response = await fetch(postsUrl);
    const json = await response.json();

    console.log(json);

    container.innerHTML = "";

    for (let i = 0; i < json.data.length; i++) {
      container.innerHTML += `
                           <a href="article-details.html?id=${json.data[i].id}"><div class="card" style="width: 24rem;">
                           <img src="http://localhost:1338${json.data[i].attributes.image.data.attributes.url}" class="card-img-top img-width" alt="${json.data[i].attributes.image.data.attributes.alternativeText}">
                              <div class="card-body">
                                <h5 class="card-title">${json.data[i].attributes.title}</h5>
                                <a href="article-details.html?id=${json.data[i].id}" class="btn btn-cta">Read more</a>
                              </div>
                            </div></a>`;
    }
  } catch (error) {
    showMessage("warning", "Ops! There is a problem with retrieving data from the API", ".message-container");
  }
})();
