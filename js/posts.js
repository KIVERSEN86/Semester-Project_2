import showMessage from "./components/showMessage.js";
import { createNav } from "./components/createNav.js";
import { createFooter } from "./components/createFooter.js";
import { baseUrl } from "./components/constants/baseUrl.js";
import { createPosts } from "./components/posts/createPosts.js";
import { searchPosts } from "./components/posts/searchPosts.js";

createNav();
createFooter();

const url = baseUrl + "posts";

async function displayPosts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    const data = json && json.data ? json.data : [];

    console.log(data);

    searchPosts(data);
    createPosts(data);
  } catch (error) {
    console.log(error);
    showMessage("warning", "Ops! There is a problem with retrieving data from the API", ".message-container");
  }
}
displayPosts();
