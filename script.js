const lines = [
  "🌟 Your smile lights up every room.",
  "💬 Your laugh is my favorite melody.",
  "🌸 Your kindness makes the world softer.",
  "🌙 You believe in me when I don’t believe in myself.",
  "🫶 You’re my calm in the chaos.",
  "🍰 You’re sweeter than dessert and warmer than sunshine.",
  "🌈 With you, every moment feels like a beautiful day.",
  "💖 You understand me in ways no one else ever has.",
  "🎨 You add color to the dullest moments.",
  "🧩 You complete my puzzle."
];

const music = document.getElementById("bg-music");
const textList = document.getElementById("text-list");
const mainContent = document.getElementById("main-content");
const heartsContainer = document.getElementById("hearts-container");

let started = false;

function init() {
  // Prevent double-init if image reloads or triggers multiple times
  if (started) return;
  started = true;

  // Show main content
  mainContent.style.display = "block";

  // Try playing music
  music.play().catch((e) => {
    console.warn("Music play failed, might need user interaction.");
  });

  // Show text and animate hearts
  showLines();
  startHeartAnimation();
}

function showLines() {
  let i = 0;
  const interval = setInterval(() => {
    if (i >= lines.length) {
      clearInterval(interval);
      return;
    }
    const p = document.createElement("p");
    p.textContent = lines[i];
    p.style.animationDelay = `${i * 1.2}s`;
    textList.appendChild(p);
    i++;
  }, 1200);
}

function startHeartAnimation() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.top = `${Math.random() * window.innerHeight}px`;
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 500);
}
