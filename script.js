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
const photo = document.getElementById("main-photo");

// Wait for image to load before starting music and animations
photo.onload = () => {
  mainContent.style.display = "block";

  // Start music
  music.play().then(() => {
    showLines();
    startHeartAnimation();
  }).catch((e) => {
    console.warn("Autoplay failed, user interaction may be required.");
  });
};

// Fallback if image already loaded (e.g. cached)
if (photo.complete) {
  photo.onload();
}

// Display lines one-by-one
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

// Spawn hearts from side
function startHeartAnimation() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = "0px";
    heart.style.top = `${Math.random() * window.innerHeight}px`;
    heart.textContent = "❤️";
    document.getElementById("hearts-container").appendChild(heart);

    // Remove after animation
    setTimeout(() => heart.remove(), 4000);
  }, 500);
}
