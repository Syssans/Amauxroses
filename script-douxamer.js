



// Menu toggle
const menuWrapper = document.getElementById("menuWrapper");

menuWrapper.addEventListener("mouseenter", () => {
  menuWrapper.classList.add("active");
});

menuWrapper.addEventListener("mouseleave", () => {
  // Lance un délai avant de masquer
  hideTimeout = setTimeout(() => {
    menuWrapper.classList.remove("active");
  }, 500); // ← ici tu ajustes le délai (en ms)
});




document.querySelectorAll('.pensee').forEach((el, index) => {
  el.classList.add(index % 2 === 0 ? 'left' : 'right');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.pensee').forEach(p => observer.observe(p));

const header = document.querySelector(".site-header");

let targetProgress = 0;
let currentProgress = 0;

function update() {
  currentProgress += (targetProgress - currentProgress) * 0.1;
  currentProgress = Math.min(Math.max(currentProgress, 0), 1);

  const startLeft = window.innerWidth / 2;
  const targetLeft = 20;
  const distance = startLeft - targetLeft;
  const currentLeft = startLeft - (distance * currentProgress);

  const rotation = -90 * currentProgress;
  const scale = 1 - (0.4 * currentProgress);

  // Décalage vertical progressif (ex : 0px → 20px)
  const verticalShift = 150 * currentProgress;

  header.style.left = `${currentLeft}px`;
  header.style.transform = `translateX(-50%) translateY(${verticalShift}px) rotate(${rotation}deg) scale(${scale})`;

  requestAnimationFrame(update);
}

update();

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const triggerPoint = 150;
  const progress = Math.min(Math.max((scrollY - triggerPoint) / 300, 0), 1);
  targetProgress = progress;
});