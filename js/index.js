import showMessage from "./components/showMessage.js";
import { createNav } from "./components/createNav.js";
import { createFooter } from "./components/createFooter.js";
import { baseUrl } from "./data/baseUrl.js";

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
                           <a href="articleDetails.html?id=${json.data[i].id}"><div class="card" style="width: 24rem;">
                           <img src="http://localhost:1338${json.data[i].attributes.image.data.attributes.url}" class="card-img-top img-width" alt="${json.data[i].attributes.image.data.attributes.alternativeText}">
                              <div class="card-body">
                                <h5 class="card-title">${json.data[i].attributes.title}</h5>
                                <a href="articleDetails.html?id=${json.data[i].id}" class="btn btn-cta btn-cta_hover">Read more</a>
                              </div>
                            </div></a>`;
    }
  } catch (error) {
    showMessage("warning", "Ops! There is a problem with the API", ".message-container");
  }
})();

function signUp() {
  const container = document.querySelector(".container__signup");

  container.innerHTML += `<div class="card signup__card">
                            <div class="card-body">
                              <h1 class="card-title h1-frontpage">A wiki for front-end developers, by developers.</h1>
                              <h2 class="card-title">Start your contribution today!</h2>
                              <div class="container__btn-signup">
                              <a href="about.html" class="btn btn-cta btn-cta_hover btn-signup">Read more</a>
                              </div>
                            </div>
                          </div>`;
}
