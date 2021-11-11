const inputForm = document.querySelector("form");
const title = document.querySelector("h4");
const summary = document.querySelector("p");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  query = e.target.children[1].value;
  fetch(`http://localhost:3000/movies/${query}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      title.textContent = data.title;
      summary.textContent = data.summary;
    });
  inputForm.reset();
});
