document.getElementById("play-btn").addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  const notesContainer = document.getElementById("notes");
  const lines = notesContainer.querySelectorAll("p");
  const heartsContainer = document.querySelector(".hearts");

  // Start music
  music.play();

  // Reveal notes container
  notesContainer.classList.remove("hidden");

  // Animate text line-by-line
  lines.forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = 1;
    }, i * 1000);
  });

  // Closing and signature
  setTimeout(() => {
    document.getElementById("closing").classList.remove("hidden");
  }, lines.length * 1000 + 500);

  setTimeout(() => {
    const sig = document.getElementById("signature");
    sig.classList.remove("hidden");
    sig.style.animation = "typing 3s steps(20) forwards";
  }, lines.length * 1000 + 2000);

  // Start floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 24 + 12 + "px";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 400);

  // Disable button
  const btn = document.getElementById("play-btn");
  btn.disabled = true;
  btn.textContent = "🎶 Playing";
});
