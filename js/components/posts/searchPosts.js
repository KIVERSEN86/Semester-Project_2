import { createPosts } from "./createPosts.js";

export function searchPosts(posts) {
  const search = document.querySelector(".search-posts");

  search.onkeyup = function () {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredPosts = posts.data.filter(function (post) {
      if (post.attributes.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    console.log(filteredPosts);
  };
}
