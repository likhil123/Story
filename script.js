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

