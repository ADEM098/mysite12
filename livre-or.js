document.getElementById("guestForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) return;

  const entry = { name, message, date: new Date().toLocaleString() };

  let messages = JSON.parse(localStorage.getItem("guestMessages")) || [];
  messages.push(entry);
  localStorage.setItem("guestMessages", JSON.stringify(messages));

  alert("Merci pour votre message !");
  this.reset();
});
