import { getToken } from "../../utils/localStorage.js";

export function createPosts(json) {
  const token = getToken();
  const container = document.querySelector(".container__posts");
  const posts = json.data;

  container.innerHTML = "";

  if (token) {
    for (let i = 0; i < posts.length; i++) {
      container.innerHTML += `<a class="posts" href="editPost.html?id=${posts[i].id}">
                                <div class="card" style="width: 24rem;">
                                  <div class="card-body">
                                    <h5 class="card-title">${posts[i].attributes.title}</h5>
                                    <a href="editPost.html?id=${posts[i].id}" class="btn btn-cta btn-cta_hover post">
                                      Edit post
                                    </a>
                                  </div>
                                </div>
                                </a>`;
    }
  } else {
    for (let i = 0; i < posts.length; i++) {
      container.innerHTML += `<a class="posts" href="postDetails.html?id=${posts[i].id}">
                                <div class="card card__post" style="width: 24rem;">
                                  <div class="card-body">
                                    <h5 class="card-title">${posts[i].attributes.title}</h5>
                                    <a href="postDetails.html?id=${posts[i].id}" class="btn btn-cta btn-cta_hover post">
                                      View more
                                    </a>
                                  </div>
                                </div>
                                </a>`;
    }
  }
}
