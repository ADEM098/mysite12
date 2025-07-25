const phrases = [
  "Promis pour toujours",
  "Pour l’éternité",
  "Love forever",
  "永遠に愛してる",
  "Amor eterno"
];

let index = 0;
setInterval(() => {
  const text = document.querySelector(".changing-text");
  text.textContent = phrases[index];
  index = (index + 1) % phrases.length;
}, 3000);
