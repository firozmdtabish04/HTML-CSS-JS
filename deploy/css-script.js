const moveTopBtn = document.getElementById("moveTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
});

function moveToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
