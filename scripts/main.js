// mode toggler
const body = document.querySelector("body");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark_mode");
}

function toggleMode() {
  body.classList.toggle("dark_mode");

  if (body.classList.contains("dark_mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// mob menu
function toggleMenu() {
  document
    .querySelector(".nav_mob_wrapper")
    .classList.toggle("nav_mob_wrapper_visible");
}

// filter btns
const buttons = document.querySelectorAll(".filter_btns .main_btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("yellow_btn"));
    button.classList.add("yellow_btn");
  });
});

// to top btn
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
