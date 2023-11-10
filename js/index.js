import showMessage from "./components/showMessage.js";
import { createNav } from "./components/createNav.js";
import { createFooter } from "./components/createFooter.js";
import { baseUrl } from "./components/constants/baseUrl.js";
import { signUp } from "./components/signUp.js";
import { createCards } from "./components/createCards.js";

createNav();
signUp();
createFooter();

const postsUrl = baseUrl + "articles?populate=image";

(async function () {
  try {
    const response = await fetch(postsUrl);
    const json = await response.json();

    console.log(json);
    createCards(json);
  } catch (error) {
    showMessage("warning", "Ops! There is a problem with retrieving data from the API", ".message-container");
  }
})();
