const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const collapsibleContentOpen = document.querySelector(
  "#collapsiblecontent"
);

openButton.addEventListener("click", () => {
  collapsibleContentOpen.classList.remove("hide");
});

closeButton.addEventListener("click", () => {
  collapsibleContentOpen.classList.add("hide");
});

const toggleButton = document.querySelector("#togglereveal");
const collapsibleContentToggle = document.querySelector(
  "#collapsiblecontent"
);

toggleButton.addEventListener("click", () => {
  collapsibleContentToggle.classList.toggle("hide");
});
