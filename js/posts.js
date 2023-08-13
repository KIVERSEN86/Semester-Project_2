import showMessage from "./components/showMessage.js";
import { createNav } from "./components/createNav.js";
import { createFooter } from "./components/createFooter.js";
import { baseUrl } from "./data/baseUrl.js";
import { searchPosts } from "./components/posts/searchPosts.js";
import { createPosts } from "./components/posts/createPosts.js";

createNav();
createFooter();

const url = baseUrl + "posts";

async function displayPosts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    searchPosts(json);
    createPosts(json);
  } catch (error) {
    console.log(error);
    showMessage("warning", "Ops! There is a problem with the API", ".message-container");
  }
}
displayPosts();
