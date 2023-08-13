import { baseUrl } from "../../data/baseUrl.js";
import { getToken } from "../../utils/localStorage.js";

export default function deletePosts(id) {
  const container = document.querySelector(".del-container");

  container.innerHTML = `<button type="button" class="btn btn-danger delete">Delete</button>`;

  const button = document.querySelector("button.delete");

  button.onclick = async function () {
    console.log(id);

    const confirmDelete = confirm("Clicking ok will remove this post from the database");
    console.log(confirmDelete);

    if (confirmDelete) {
      const url = baseUrl + "posts/" + id;

      const token = getToken();

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();

        location.href = "/";

        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }
  };
}
