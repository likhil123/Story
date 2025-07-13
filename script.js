const lines = [
  "💡 Your smile lights up every room.",
  "💬 Your laugh is my favorite melody.",
  "🌸 Your kindness makes the world softer.",
  "🌙 You believe in me when I don’t believe in myself.",
  "🍂 You’re my calm in the chaos.",
  "🍰 You’re sweeter than dessert and warmer than sunshine.",
  "🌈 With you, every moment feels like a beautiful day.",
  "💖 You understand me in ways no one else ever has.",
  "🎨 You add color to the dullest moments.",
  "🧩 You complete my puzzle."
];

const textBox = document.getElementById('text-list');
let index = 0;

function showNextLine() {
  if (index < lines.length) {
    const p = document.createElement('p');
    p.textContent = lines[index++];
    textBox.appendChild(p);
    setTimeout(() => {
      p.style.display = 'block';
      p.style.opacity = '1';
    }, 100);
    setTimeout(showNextLine, 1500); // delay between lines
  }
}

window.onload = () => {
  showNextLine();
  startFloatingHearts();
};

// Music toggle
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.onclick = () => {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.textContent = "Play Music 🎵";
  } else {
    bgMusic.play();
    musicBtn.textContent = "Pause Music ⏸️";
  }
  isPlaying = !isPlaying;
};

// Floating hearts
function startFloatingHearts() {
  const container = document.getElementById("hearts-container");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }, 400);
}
