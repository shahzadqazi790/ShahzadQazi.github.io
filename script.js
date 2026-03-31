function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function sendMessage(e) {
  e.preventDefault();
  alert("Message Sent Successfully!");
}