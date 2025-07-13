const music = document.getElementById("bg-music");
const playBtn = document.getElementById("playBtn");
const notes = document.getElementById("notes");
const signatureHeader = document.getElementById("signature-header");
const signature = document.getElementById("signature");

playBtn.addEventListener("click", () => {
  music.play().then(() => {
    playBtn.disabled = true;
    playBtn.innerText = "🎵 Playing...";
    showTextLines();
  }).catch(err => {
    alert("Autoplay blocked. Please interact with the page first.");
    console.error(err);
  });
});

function showTextLines() {
  const lines = notes.querySelectorAll("p");
  notes.classList.remove("hidden");

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.style.display = "block";
    }, index * 1000);
  });

  setTimeout(() => {
    signatureHeader.classList.remove("hidden");
    signature.classList.remove("hidden");
  }, lines.length * 1000 + 500);
}

// Create floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 24 + 12 + "px";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);
