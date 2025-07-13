document.getElementById("play-btn").addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  const notes = document.querySelectorAll(".love-notes p");
  const notesContainer = document.getElementById("notes");
  const heartsContainer = document.querySelector(".hearts");

  // Play music
  music.play();

  // Show love-notes and animate each line
  notesContainer.classList.remove("hidden");
  notes.forEach((note, i) => {
    setTimeout(() => {
      note.style.opacity = 1;
    }, i * 1200);
  });

  // Reveal signature & closing
  setTimeout(() => {
    document.getElementById("closing").classList.remove("hidden");
  }, notes.length * 1200 + 1000);

  setTimeout(() => {
    const sig = document.getElementById("signature");
    sig.classList.remove("hidden");
    sig.style.animation = "typing 3s steps(20) forwards";
  }, notes.length * 1200 + 2500);

  // Start hearts
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
  document.getElementById("play-btn").disabled = true;
  document.getElementById("play-btn").textContent = "🎶 Playing";
});
