import { baseUrl } from "./data/baseUrl.js";
import showMessage from "./components/showMessage.js";
import { getToken } from "./utils/localStorage.js";
import { createFooter } from "./components/createFooter.js";
import { createNav } from "./components/createNav.js";
import deletePosts from "./components/posts/deleteBtn.js";

const token = getToken();

/*if (!token) {
  location.href = "/";
} */

createNav();
createFooter();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = baseUrl + "posts/" + id;

const form = document.querySelector("#form");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const example = document.querySelector("#exampleFormControlTextarea1");
const inputId = document.querySelector("#id");
const message = document.querySelector(".message-container");

(async function () {
  try {
    const response = await fetch(url);
    const json = await response.json();

    title.value = json.data.attributes.title;
    content.value = json.data.attributes.content;
    example.value = json.data.attributes.example;
    inputId.value = json.data.id;

    deletePosts(json.data.id);
  } catch (error) {
    console.log(error);
  } finally {
    /*loading.style.display = "none";*/
    form.style.display = "block";
  }
})();

form.addEventListener("submit", editForm);

function editForm() {
  event.preventDefault();

  message.innerHTML = "";

  const titleInput = title.value.trim();
  const contentInput = content.value.trim();
  const exampleInput = example.value.trim();
  const idInput = inputId.value;

  if (titleInput.length === 0 || contentInput.length === 0 || exampleInput.length === 0) {
    return showMessage("warning", "Your inputs are not valid", ".message-container");
  }

  updatePost(titleInput, contentInput, exampleInput, idInput);
}

async function updatePost(title, content, example, id) {
  const url = baseUrl + "posts/" + id;

  const editData = { title: title, content: content, example: example };
  const editApi = JSON.stringify({ data: editData });

  const options = {
    method: "PUT",
    body: editApi,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.data.attributes.updatedAt) {
      showMessage("success", "Post successfully edited", ".message-container");
    }

    if (json.data.error) {
      showMessage("warning", json.data.error.message, ".message-container");
      console.log(error);
    }

    console.log(json);
  } catch (error) {
    console.log(error);
    showMessage("warning", "An unexpected error occured", ".message-container");
  }
}
