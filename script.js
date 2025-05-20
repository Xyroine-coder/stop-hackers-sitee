// 🎥 Video Modal Logic
const modal = document.getElementById("videoModal");
const openBtn = document.getElementById("openVideo");
const closeBtn = document.querySelector(".modal .close");

openBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
  modal.querySelector("video").pause();
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modal.querySelector("video").pause();
  }
};
