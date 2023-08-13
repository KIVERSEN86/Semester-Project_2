import { removeStorage } from "../utils/localStorage.js";

export default function logoutBtn() {
  const button = document.querySelector(".logout-btn");

  if (button) {
    button.onclick = function () {
      const confirmLogout = confirm("Are you sure you want to logout?");

      if (confirmLogout) {
        removeStorage();
        location.href = "/";
      }
    };
  }
}
