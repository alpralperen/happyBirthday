function showSection(id) {
  document
    .querySelectorAll("section")
    .forEach((sec) => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function openModal(id) {
  document
    .querySelectorAll(".modal")
    .forEach((modal) => modal.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

// Müzik: Etkileşim sonrası çal
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.2;

  document.body.addEventListener(
    "click",
    () => {
      music.play().catch(() => {
        console.log("Müzik çalmadı: Tarayıcı kısıtlaması.");
      });
    },
    { once: true }
  );
});

function createStars() {
  document.querySelectorAll(".star").forEach((star) => star.remove());
  for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(star);
  }
}
createStars();
