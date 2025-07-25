const container = document.getElementById("messagesContainer");
const messages = JSON.parse(localStorage.getItem("guestMessages")) || [];

if (messages.length === 0) {
  container.innerHTML = "<p>Aucun message pour le moment.</p>";
} else {
  messages.reverse().forEach(msg => {
    const div = document.createElement("div");
    div.style.marginBottom = "20px";
    div.innerHTML = `
      <strong>${msg.name}</strong> <em>(${msg.date})</em><br>
      ${msg.message}
      <hr style="margin-top:10px;">
    `;
    container.appendChild(div);
  });
}
