
// Confetti
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettis = [];

function Confetti() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height - canvas.height;
  this.radius = Math.random() * 6 + 4;
  this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
  this.speed = Math.random() * 3 + 2;
  this.wind = Math.random() * 2 - 1;
}

Confetti.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
};

Confetti.prototype.update = function () {
  this.y += this.speed;
  this.x += this.wind;
  if (this.y > canvas.height) {
    this.y = -10;
    this.x = Math.random() * canvas.width;
  }
};

function initConfetti() {
  for (let i = 0; i < 150; i++) {
    confettis.push(new Confetti());
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettis.forEach(c => {
    c.update();
    c.draw();
  });
  requestAnimationFrame(animateConfetti);
}

initConfetti();
animateConfetti();

// Secret Message
document.getElementById('surpriseBtn').onclick = () => {
  document.getElementById('secretMessage').classList.remove('d-none');
};
