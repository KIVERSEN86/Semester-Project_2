import { getToken } from "../../utils/localStorage.js";

export function createPosts(data) {
  const token = getToken();
  const container = document.querySelector(".container__posts");

  container.innerHTML = "";

  if (token) {
    for (let i = 0; i < data.length; i++) {
      container.innerHTML += `<a class="posts" href="edit-post.html?id=${data[i].id}">
                                <div class="card" style="width: 24rem;">
                                  <div class="card-body">
                                    <h5 class="card-title">${data[i].attributes.title}</h5>
                                    <a href="edit-post.html?id=${data[i].id}" class="btn btn-cta  post">
                                      Edit post
                                    </a>
                                  </div>
                                </div>
                                </a>`;
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      container.innerHTML += `<a class="posts" href="post-details.html?id=${data[i].id}">
                                <div class="card card__post" style="width: 24rem;">
                                  <div class="card-body">
                                    <h5 class="card-title">${data[i].attributes.title}</h5>
                                    <a href="post-details.html?id=${data[i].id}" class="btn btn-cta post">
                                      View more
                                    </a>
                                  </div>
                                </div>
                                </a>`;
    }
  }
}
