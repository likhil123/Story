window.onload = function () {
  const music = document.getElementById("bg-music");
  const playBtn = document.getElementById("play-btn");
  const container = document.getElementById("main-container");
  const notes = document.querySelectorAll(".love-notes p");
  const signature = document.querySelector(".signature");
  const heartsContainer = document.querySelector(".hearts");

  const heartColors = ["❤️", "💖", "💜", "💙", "💚", "💛"];

  playBtn.onclick = () => {
    music.play();
    playBtn.remove();
    container.style.opacity = 1;

    // Line-by-line reveal
    notes.forEach((note, i) => {
      setTimeout(() => {
        note.style.opacity = 1;
      }, 2000 + i * 2500);
    });

    // Reveal signature at end
    setTimeout(() => {
      signature.style.opacity = 1;
    }, 2000 + notes.length * 2500);

    // Floating hearts
    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = heartColors[Math.floor(Math.random() * heartColors.length)];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 18 + "px";
      heart.style.animationDuration = 3 + Math.random() * 2 + "s";
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, 300);

    // Fade out entire content after 40s
    setTimeout(() => {
      container.style.transition = "opacity 2s ease-out";
      container.style.opacity = 0;
    }, 40000);
  };
};
