import { getUserName } from "../utils/localStorage.js";
import logoutBtn from "./logoutBtn.js";

export function createNav() {
  const { pathname } = document.location;

  const username = getUserName();

  let authLink = ` <a class="btn btn-cta nav-btn" href="login.html" type="submit">Login</button></a>`;

  if (username) {
    authLink = `
                <a class="btn btn-cta ${pathname === "/addPost.html" ? "" : ""}" href="add-post.html" type="submit">Add post</button></a>
                <button class="logout-btn btn btn-cta">Logout ${username}</button>`;
  }

  const container = document.querySelector(".container__nav");

  container.innerHTML += `<nav class="navbar navbar-expand-xl">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><i class="fa-solid fa-book-open" style="color: #ffffff;"></i>Book of Code</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon btn-close-white"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link ${pathname === "/index.html" || pathname === "/" ? "nav-active" : ""}" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link ${pathname === "/posts.html" ? "nav-active" : ""}" href="posts.html">Posts</a>
                </li>
                <li class="nav-item">
                <a class="nav-link ${pathname === "/about.html" ? "nav-active" : ""}" href="about.html">About</a>
                </li>
            </ul>
            <div class="nav__btn-container">
            <a class="btn btn-cta nav-btn" href="/" type="submit">Sign up</button></a>
            ${authLink}
            </div>
            </div>
        </div>
        </nav>`;

  logoutBtn();
}
