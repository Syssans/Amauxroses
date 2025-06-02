const textContainer = document.querySelector(".text-content");
const scrollInner = document.getElementById("scrollInner");
const menuBar = document.getElementById("menuBar");
const menuLinks = document.getElementById("menuLinks");
const textReponse = document.getElementById("textReponse");
const reponseBtn = document.getElementById("reponseBtn");


const pastilles = [
  {
    text: "C’est au beau milieu des hurlements qu’il vint s’écraser contre le mur. Dans un bruit sourd comparable à un claquement. Sa forme autrefois reconnaissable se compressa contre le ciment craquelé, se rétracta, gondola et en un battement de paupière le fluide s’échappa, libéré d’une pression geôlière. Happé par la liberté il se posa harmonieusement contre la paroi, venant repeindre la surface grise de la façade de la boutique, sous les yeux écarquillés des enfants, souriants.",
    emoji: "🍄",
    reponse: "La bombe à eau"
  },
  {
    text: "Elle entre, doucement mais surement. Son air assuré rend les choses plus simples. La porte s’ouvre et se referme délicatement derrière elle. Assise confortablement, elle peut observer à travers les murs de verre, le monde extérieur. La confiance s’installe pendant que d’autres la rejoignent. Un bruit sourd surgit et à la suite d’un strident tremblement son corps se retrouve entrainé dans une valse infernale, projeté contre les murs. Ses tissus se déchirent, sa chair se broie, les dégâts sont tels que rien ni personne n’en ressort reconnaissable. La scène se poursuit, les cris s’estompent et les silhouettes disparaissent dans une mixture colorée, sucrée.",
    emoji: "🌙",
    reponse: "Le smoothie"
  },
  {
    text: "C’était un beau soir d’été, j’avais un rendez-vous. Avec qui ? Aucune idée. Sans nul doute quelqu’un d’important, on m’avait lavé après tout. Après mon passage sous un doux filet d’eau, j’eu le droit à un massage, des doigts se posèrent sur ma peau et palpèrent délicatement mes contours avant de me poser doucement sur un parquet rayé. C’est à ce moment qu’apparu à mes côtés un miroir, un miroir gondolé et quelque peu dentelé, il me permettait d’apprécier mes formes mais je le suspectais de m’arrondir. Mais qu’importe. Le miroir disparu dans les airs quelques secondes et d’un élan ravageur fonda sur moi avant de se planter dans ma chair. D’un mouvement calme il s’avança puis recula et répéta l’exercice jusqu’à ce que mon corps se disloque. Une funèbre chorégraphie que le miroir désormais sanglant recommençait sans arrêt. Mon corps se trouva séparé en plusieurs morceaux, tissus déchirés, viscères à l’air, fluides dégoulinants. Quelques ornements végétaux vinrent se poser sur ce qui restait de moi, de fines rondelles cadavériques appétissantes. Quoi qu’il en soit, ma place était là, entre ces deux tranches de mozzarella",
    emoji: "🔥",
    reponse: "La tomate"
  },
  {
    text: "Quatrième pastille — paisible et verte 🌿",
    emoji: "🌿",
    reponse: "La forêt"
  },
  {
    text: "Cinquième pastille — légère comme l'air ☁️",
    emoji: "☁️",
    reponse: "Le souffle"
  }
];


let currentIndex = 2;

function renderScroll(prevIndex = null) {
  scrollInner.innerHTML = "";

  pastilles.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("scroll-item");
    if (index === currentIndex) div.classList.add("active");
    div.dataset.index = index;
    div.innerText = item.emoji;
    scrollInner.appendChild(div);
  });

  const offset = (currentIndex - 2) * -60;
  scrollInner.style.transform = `translateY(${offset}px)`;

  textContainer.style.opacity = 0;
  const direction = prevIndex === null ? 0 : currentIndex > prevIndex ? 20 : -20;
  textContainer.style.transform = `translateY(${direction}px)`;

  setTimeout(() => {
    textContainer.innerText = pastilles[currentIndex].text;
    textContainer.style.transform = "translateY(0)";
    textContainer.style.opacity = 1;

    // Réinitialise la réponse
    textReponse.innerText = "";
    textReponse.classList.remove("visible");
    reponseBtn.style.display = "inline-block";
  }, 300);
}


// nouvelle fonction pour afficher la réponse
function showReponse() {
  const current = pastilles[currentIndex];
  const textReponse = document.getElementById("textReponse");
  textReponse.innerText = current.reponse;
  textReponse.classList.add("visible");
}


function changeIndex(delta) {
  const newIndex = currentIndex + delta;
  if (newIndex >= 0 && newIndex < pastilles.length) {
    const prev = currentIndex;
    currentIndex = newIndex;
    renderScroll(prev);
  }
}

document.querySelector(".text-container").addEventListener("wheel", (e) => {
  e.preventDefault();
  const delta = Math.sign(e.deltaY);
  changeIndex(delta);
});

scrollInner.addEventListener("click", (e) => {
  const item = e.target.closest(".scroll-item");
  if (item) {
    const prev = currentIndex;
    currentIndex = parseInt(item.dataset.index);
    renderScroll(prev);
  }
});

reponseBtn.addEventListener("click", () => {
  textReponse.innerText = pastilles[currentIndex].reponse;
  textReponse.classList.add("visible");
  reponseBtn.style.display = "none";
});


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



// Init
renderScroll();
