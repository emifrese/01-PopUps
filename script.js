const button = document.querySelector("#agree");
const modal = document.querySelector("#modal");
const form = document.querySelector("#login");
const userName = form.elements['name']

button.addEventListener("click", () => modal.classList.toggle("display-none"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.replace(`./profile.html?${userName.value}`)
});
