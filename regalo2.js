function playCelebration() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });

  // Confeti repetido
  let count = 3;
  let interval = setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    count--;
    if (count <= 0) clearInterval(interval);
  }, 1000);
}

// Crear flores animadas
function createFlowers() {

  // Flores en el lado izquierdo
  for (let i = 0; i < 5; i++) {
    createFlower('left', 20 + (i * 15));
  }

  // Flores en el lado derecho
  for (let i = 0; i < 5; i++) {
    createFlower('right', 20 + (i * 15));
  }
}

function createFlower(side, topPercent) {

  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.top = topPercent + '%';

  if (side === 'left') {
    flower.style.left = '50px';
  } else {
    flower.style.right = '50px';
  }

  flower.style.animation = 'float 3s ease-in-out infinite';
  flower.style.animationDelay = Math.random() * 2 + 's';

  // 🌿 FLOR VERDE (CAMBIO AQUÍ)
  flower.textContent = '🍃';

  document.body.appendChild(flower);
}

// Llamar función al cargar
window.addEventListener('load', createFlowers);
