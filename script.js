// Create falling hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.floor(Math.random() * 24 + 16) + "px";
  heart.style.animationDuration = Math.random() * 3 + 5 + "s"; // varied fall speed
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000); // match longer animation duration
}

// Start creating hearts at intervals
setInterval(createHeart, 300);
