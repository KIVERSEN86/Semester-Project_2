import { createPosts } from "./createPosts.js";

export function searchPosts(data) {
  const search = document.querySelector(".search-posts");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredPosts = data.filter(function (post) {
      if (post.attributes.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    console.log(filteredPosts);
    createPosts(filteredPosts);
  };
}
