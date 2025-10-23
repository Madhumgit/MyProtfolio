// Smooth-follow cursor
const cursor = document.getElementById('cursor');
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let posX = mouseX, posY = mouseY;
const speed = 0.18;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.classList.remove('cursor--hide');
});

window.addEventListener('mouseleave', () => cursor.classList.add('cursor--hide'));
window.addEventListener('mouseenter', () => cursor.classList.remove('cursor--hide'));

function raf() {
  posX += (mouseX - posX) * speed;
  posY += (mouseY - posY) * speed;
  cursor.style.left = posX + 'px';
  cursor.style.top = posY + 'px';
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// enlarge cursor on hover
const interactive = document.querySelectorAll('a, button, .clickable');
interactive.forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('cursor--hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--hover'));
});

// click effect
window.addEventListener('mousedown', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(0.85)';
});
window.addEventListener('mouseup', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

// keyboard focus support
interactive.forEach(el => {
  el.addEventListener('focus', () => cursor.classList.add('cursor--hover'));
  el.addEventListener('blur', () => cursor.classList.remove('cursor--hover'));
});
/*text animation */
    gsap.to(".line span", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3
    });
