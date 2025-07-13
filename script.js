// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 24 + 16 + "px";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 400);

// Music control and reveal
document.getElementById("play-btn").addEventListener("click", function () {
  const music = document.getElementById("bg-music");
  const notes = document.getElementById("love-notes");
  music.play();
  notes.classList.remove("hidden");
});
