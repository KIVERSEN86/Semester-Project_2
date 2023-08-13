export function createFooter() {
  const container = document.querySelector(".container__footer");

  container.innerHTML += `<div class="footer__links">
                            <a href="index.html" class="footer__links-a">Home</a>
                            <a href="about.html" class="footer__links-a">About</a>
                            <a href="contanct.html" class="footer__links-a">Contact us</a>
                          </div>
                          <div class="media-links footer__links">
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></i></a>
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                          </div>`;
}
