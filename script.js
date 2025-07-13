window.onload = function () {
  const music = document.getElementById("bg-music");
  const notes = document.querySelectorAll(".love-notes p");
  const heartsContainer = document.querySelector(".hearts");

  // Try to auto-play music after slight delay
  setTimeout(() => {
    music.play().then(() => {
      console.log("Music started");
    }).catch(() => {
      // Autoplay blocked - show button
      const btn = document.createElement("button");
      btn.textContent = "Play Music 🎵";
      btn.className = "music-btn";
      btn.onclick = () => {
        music.play();
        btn.remove();
      };
      document.body.appendChild(btn);
    });
  }, 2000);

  // Show love notes one by one with increased delay
  notes.forEach((note, i) => {
    setTimeout(() => {
      note.style.opacity = 1;
    }, 3000 + i * 2000); // 2 seconds between each line
  });

  // Start more frequent floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 16 + "px";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 250); // more frequent hearts (every 250ms)
};
