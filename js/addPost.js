import showMessage from "./components/showMessage.js";
import { createNav } from "./components/createNav.js";
import { createFooter } from "./components/createFooter.js";
import { baseUrl } from "./data/baseUrl.js";
import { getToken } from "./utils/localStorage.js";

const token = getToken();

if (!token) {
  location.href = "/";
}

createNav();
createFooter();

const form = document.querySelector("#form");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const example = document.querySelector("#exampleFormControlTextarea1");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitPost);

function submitPost(event) {
  event.preventDefault();

  message.innerHTML = "";

  const inputTitle = title.value.trim();
  const inputContent = content.value.trim();
  const inputExample = example.value.trim();

  if (inputTitle.length === 0 || inputContent.length === 0 || inputExample.length === 0) {
    return showMessage("warning", "Your inputs are not valid", ".message-container");
  }

  addPost(inputTitle, inputContent, inputExample);
}

async function addPost(title, content, example) {
  const url = baseUrl + "posts";

  const addData = { title: title, content: content, example: example };
  const apiData = JSON.stringify({ data: addData });

  const options = {
    method: "POST",
    body: apiData,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.data.attributes.createdAt) {
      showMessage("success", "Post created", ".message-container");
      form.reset();
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
