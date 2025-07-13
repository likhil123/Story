window.onload = function () {
  const music = document.getElementById("bg-music");
  const notes = document.querySelectorAll(".love-notes p");
  const playBtn = document.getElementById("play-btn");
  const container = document.getElementById("main-container");
  const heartsContainer = document.querySelector(".hearts");

  const heartColors = ["❤️", "💖", "💜", "💙", "💚", "💛"];

  playBtn.onclick = () => {
    music.play();
    playBtn.remove();
    container.style.transition = "opacity 1s ease-in-out";
    container.style.opacity = 1;

    // Show love notes one by one
    notes.forEach((note, i) => {
      setTimeout(() => {
        note.style.opacity = 1;
      }, 3000 + i * 2500);
    });

    // Start floating hearts
    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = heartColors[Math.floor(Math.random() * heartColors.length)];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 16 + "px";
      heart.style.animationDuration = 3 + Math.random() * 2 + "s";
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, 250);

    // Fade out after ~40 seconds
    setTimeout(() => {
      container.style.transition = "opacity 2s ease-in-out";
      container.style.opacity = 0;
    }, 40000);
  };
};
