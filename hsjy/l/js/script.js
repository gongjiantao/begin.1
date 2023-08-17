const card = document.querySelector(".card");
const view = document.querySelector(".view");
const close = document.querySelector(".close");
const picture = document.querySelector(".picture");

function expand() {
  card.classList.remove("preview");
  card.classList.add("expanded");
}

view.addEventListener("click", event => {
  expand();
});

picture.addEventListener("click", event => {
  if (card.classList.contains("preview")) {
    expand();
  }
});

close.addEventListener("click", event => {
  card.classList.remove("expanded");
  card.classList.add("preview");
});

// Added a Codepen thumbnail influencer to make the preview more interesting (See: https://codepen.io/demaine/pen/xNvOzq)
if (location.pathname.match(/fullcpgrid/i)) {
  expand();
}