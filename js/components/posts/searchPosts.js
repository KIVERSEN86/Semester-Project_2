import { createPosts } from "./createPosts.js";

export function searchPosts(json) {
  const search = document.querySelector(".search-posts");

  search.onkeyup = function () {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredPosts = json.data.filter(function (json) {
      if (json.attributes.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    console.log(filteredPosts);
    createPosts(filteredPosts);
  };
}
