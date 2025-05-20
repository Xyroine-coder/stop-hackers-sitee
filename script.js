// Navigation tab switch
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    const target = e.target.getAttribute("data-page");
    document.getElementById(target).classList.add("active");
    e.target.classList.add("active");
  });
});

// Modal video popup
const modal = document.getElementById("videoModal");
const btn = document.getElementById("openVideo");
const span = document.querySelector(".close");

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
  modal.querySelector("video").pause();
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.querySelector("video").pause();
  }
}
