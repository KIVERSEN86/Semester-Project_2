export function signUp() {
  const container = document.querySelector(".container__signup");

  container.innerHTML += `<div class="card signup__card">
                            <div class="card-body">
                              <h1 class="card-title h1-frontpage">A wiki for front-end developers, by developers.</h1>
                              <h2 class="card-title">Start your contribution today!</h2>
                              <div class="container__btn-signup">
                              <a href="about.html" class="btn btn-cta btn-signup">Read more</a>
                              </div>
                            </div>
                          </div>`;
}
