import showMessage from "./components/showMessage.js";
import { saveToken } from "./utils/localStorage.js";
import { saveTheUser } from "./utils/localStorage.js";
import { baseUrl } from "./data/baseUrl.js";
import { createNav } from "./components/createNav.js";
import { createFooter } from "./components/createFooter.js";

createNav();
createFooter();

const form = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const message = document.querySelector(".message-container");

form.addEventListener("submit", formConfirmation);

function formConfirmation(event) {
  event.preventDefault();

  message.innerHTML = "";

  const inputEmail = email.value.trim();
  const inputPassword = password.value.trim();

  /*if (inputEmail.length === 0 || inputPassword === 0) {
    return showMessage("warning", "Your login credentials are incorrect, please try again.", ".message-container");
  }*/

  let validationPassed = true;

  if (emailConfirmation(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    validationPassed = false;
  }

  if (lengthChecker(password.value, 8) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
    validationPassed = false;
  }

  validLogin(inputEmail, inputPassword);
}

function lengthChecker(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailConfirmation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const correctMatch = regEx.test(email);
  return correctMatch;
}

async function validLogin(email, password) {
  const url = baseUrl + "auth/local";

  const data = JSON.stringify({ identifier: email, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);

    if (json.user) {
      //showMessage("success", "Your login was successfull", ".message-container");

      saveToken(json.jwt);
      saveTheUser(json.user);

      location.href = "/";
    }

    if (json.error) {
      showMessage("warning", "Invalid login details", ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}
