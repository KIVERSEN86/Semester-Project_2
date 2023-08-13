import { baseUrl } from "./data/baseUrl.js";
import showMessage from "./components/showMessage.js";
import { createNav } from "./components/createNav.js";
import { createFooter } from "./components/createFooter.js";

createNav();
createFooter();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = baseUrl + "posts/" + id;

(async function () {
  const container = document.querySelector(".details__container");

  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    container.innerHTML += `<div class="card-body">
                                <h1>${json.data.attributes.title}</h1>
                                <p class="card-text">${json.data.attributes.content}</p>
                                <div class="mb-3">
                                <hr>
                                <label for="exampleFormControlTextarea1" class="form-label">Example</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">${json.data.attributes.example}</textarea>
                              </div>
                            </div>`;
  } catch (error) {
    console.log(error);
  }
})();
