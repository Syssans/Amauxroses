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
    text: "Une prise, deux larges mains, chaudes et délicates se referment sur moi, le plaisir m’envahi. Il fut de courte durée. Elles m’étranglèrent, comprimé contre moi-même je n’apercevais plus la lumière du jour. Des bruits de craquement, de grincement et de claquement résonnèrent au plus profond de mon être. On m’écrase. Mon corps supporte, moi non. Je sens qu’il change de forme sans même que je puisse hurler. La scène est sans fin, la vie n’a jamais été aussi longue pourtant si proche de la mort. La lumière m’apparait accompagnée d’un vent glacial. On raconte qu’il faut aller à elle mais j’en suis incapable. Je me déplace pourtant si vite que j’aurais déjà dû la rejoindre. Un choc colossal me prend au visage, si puissant que j’en perds chacun de mes sens. Le bruit sourd l’accompagnant est la dernière chose que j’ai entendu. Mon corps se disloque en plusieurs dizaines de morceaux, certains tombent, d’autres reste accrochés quelques minutes avant de chuter. Il ne reste plus que des miettes de mon existences, éparpillées dans le silence de la neige de décembre.",
    emoji: "🌿",
    reponse: "La boulet de neige"
  },
  {
    text: "C’est avec douceur et silence qu’il se posa sur elle. Son but était de palier à l’innocence de sa nouvelle maîtresse en comblant un vide aussi flagrant que déprimant. Il commença un mouvement de rotation accompagné d’une pression continue. Chaque mouvement commençait par un début, craint de par sa particulière cruauté, et se terminait par un soulagement. Le contact entre les deux était brûlant, la surface était abîmée, noircie et creusée. La scène était silencieuse mais la souffrance odieuse. Pourtant elle se taisait. La sensation au passage de son amant était pointue, froide et douloureuse, une crucifixion non aboutie mêlée à une dissection incomplète. La teinte de sa peau changeait, son innocence disparaissait mais son amour grandissait. Malgré les tortures qu’elle endure, son amant aura finalement encré avec volonté les traits de sa dulcinée",
    emoji: "☁️",
    reponse: "Une feuille et un crayon"
  },
  {
    text: "Un lundi comme tous les autres se dessine, le son des feuilles s’entrechoquant au rythme du vent apaise l’environnement tout en le rendant rassurant. C’est aux alentours de 15 heure, 32 minutes et 23 secondes que le sol se mit à trembler. Au fil des secondes les pierres prirent vie et un son sourd s’approcha à une vitesse effrénée. En un instant la douce musique des arbres se transforma en un fracas. Un poids vint me comprimer la poitrine, mes os se déformèrent sous la masse insupportable de mon agresseur. La douleur dura moins d’une seconde, puis cessa. Avant même d’avoir eu le temps de comprendre ce qu’il venait d’arriver voilà qu’un poids similaire m’écrasa de nouveau avant de disparaître une fraction de seconde plus tard. Cette cruelle scène se répéta à la même cadence une vingtaine de fois sous un vacarme indescriptible. A bout de force, mon corps ne répondait plus, autour de moi le silence reprit, les tremblements cessèrent et la lumière réapparue brusquement. Ne serait-ce pas la fin ? Ma fin ? Les barrières se relevèrent et la valse automobile du passage à niveau reprit.",
    emoji: "🥥",
    reponse: "Les rails"
  },
  {
    text: "Ebloui, c’est la première chose que j’ai enduré après ma libération. Des mois, des années voire des décennies de solitude aussi ténébreuses que poussiéreuses. Mes retrouvailles avec la chaleur des rayons du soleil furent aussi brèves que violentes. Mon poids me mena directement au contact du sol, dur et froid. Avant même de pouvoir me plaindre une main attrapa le coin de ma lèvre et d’un geste brusque me força à ouvrir la bouche. On me gave comme un canard destiné au buffet des fêtes de fin d’année. Les mâchoires déboitées je reste tétanisé pendant que mon agresseur continue de m’engorger. Lorsque l’espace vint à manquer, mon bourreau décida de me soulager en refermant mon gosier, plein à craquer. Mes dents s’entrechoquèrent mais le volume calfeutré dans cette cavité les empêchait de maintenir tout contact entre elles. C’est alors qu’une force vint se poser contre le haut de mon crane, comprimant ma face, déformant mes os, forçant mes maxillaires à se rencontrer et ma dentition à s’aligner. En un dernier geste aussi brusque que le premier, une main longea mes lèvres comme pour vérifier qu’elles étaient bien fermées. La violence de la scène mêlée à la douleur me fit perdre connaissance. Lorsque je repris mes esprits, on me tenait par un appendice, le poids de mon corps saturé vint presque l’arracher. Au bout de quelques minutes d’agonie, on me déposa délicatement, m’abandonnant mourant sur un tapis roulant.",
    emoji: "👄",
    reponse: "La valise"
  },
  {
    text: "Il est tard, au moins 10h du matin, déjà 2h qu’on bosse. C’est l’heure de sortir de cette pièce sombre et bien trop grande pour moi seul, on pourrait en faire tenir 20 comme moi ici. Une magnifique pause s’impose. La lumière du soleil vient souligner mon magnifique choix vestimentaire du matin, une robe d’un magnifique blanc nacré se terminant par une touche automnale, orangée. La chaleur de notre étoile se rapproche petit à petit jusqu’à devenir désagréable. Mes nerfs sonnent l’alerte, ma robe vire au brun puis au noir. Une douleur affreuse emplis mon corps, ma chair fond et mes viscères se dispersent au vent. Je ne peux qu’assister à ma désintégration, destiné à une lente combustion.  Ainsi je disparais le cœur léger, laissant à mon agresseur devenu agressé, une couleur cendrée au fond de la trachée.",
    emoji: "🌞",
    reponse: "La cigarette"
  },
  {
    text: "La source de mes problèmes c’est ma tête. Encore et encore elle tourne à n’en plus finir. Alors évidement à un moment elle s’arrête mais une fois sur 2 elle laisse mon corps sans binette, exposant un flux constant de sang provenant d’une jugulaire un peu trop curieuse. J’ai de la veine qu’un simple geste circulaire remette ma caboche en place. C’est toujours pile ou face, blanc ou noir, une dichotomie entre le calme plat et un torrent assourdissant mais désaltérant.",
    emoji: "🍂",
    reponse: "La bouteille"
  }
];


let currentIndex = 0;
let reponseTimeout = null;

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
    const reponseText = document.querySelector(".reponse-text");

    if (reponseTimeout) clearTimeout(reponseTimeout);

    // Remet le texte de base
    reponseText.textContent = "Voir la réponse";

    // Enlève toutes les classes d’état
    reponseText.classList.remove("hidden");
  }, 300);


  setTimeout(checkTextScrollFade, 10);
}



function changeIndex(delta) {
  const newIndex = currentIndex + delta;
  if (newIndex >= 0 && newIndex < pastilles.length) {
    const prev = currentIndex;
    currentIndex = newIndex;
    renderScroll(prev);
  }
}

window.addEventListener("wheel", (e) => {
  const isScrollingText = e.target.closest(".text-scroll-wrapper") !== null;

  if (isScrollingText) {
    // On est dans le bloc scrollable => on ne fait rien
    return;
  }

  e.preventDefault(); // empêche le scroll de page
  const delta = Math.sign(e.deltaY);
  changeIndex(delta);
  

}, { passive: false });



scrollInner.addEventListener("click", (e) => {
  const item = e.target.closest(".scroll-item");
  if (item) {
    const prev = currentIndex;
    currentIndex = parseInt(item.dataset.index);
    renderScroll(prev);
  }
});

reponseBtn.addEventListener("click", () => {
  const reponseText = reponseBtn.querySelector(".reponse-text");

  // Masque l’ancien texte
  if (reponseText.textContent === pastilles[currentIndex].reponse) return;
  reponseText.classList.add("hidden");

  if (reponseTimeout) clearTimeout(reponseTimeout);
  // Après l’animation de sortie, insère la réponse
  setTimeout(() => {
    reponseText.textContent = pastilles[currentIndex].reponse;
    reponseText.classList.remove("hidden");
  }, 400);
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





const textContent = document.getElementById("textContent");
const textWrapper = document.querySelector(".text-scroll-wrapper");
const fadeEl = document.getElementById("fadeBottom");

function checkTextScrollFade() {
  const isScrollable = textWrapper.scrollHeight > textWrapper.clientHeight;
  const isAtBottom = textWrapper.scrollTop + textWrapper.clientHeight >= textWrapper.scrollHeight - 1;

  if (!isScrollable || isAtBottom) {
    fadeEl.classList.add("hidden");
  } else {
    fadeEl.classList.remove("hidden");
  }
}

textWrapper.addEventListener("scroll", checkTextScrollFade);


// Écoute le scroll de l'utilisateur
textContent.addEventListener("scroll", checkTextScrollFade);


const toggleHeightBtn = document.getElementById("toggleHeightBtn");
const toggleAlignBtn = document.getElementById("toggleAlignBtn");

toggleHeightBtn.addEventListener("click", () => {
  textWrapper.classList.toggle("full");

  // Change le texte du bouton
  if (textWrapper.classList.contains("full")) {
    toggleHeightBtn.textContent = "Réduire";
  } else {
    toggleHeightBtn.textContent = "Afficher tout";
  }

  // Vérifie si on doit masquer le fade
  checkTextScrollFade();
});

toggleAlignBtn.addEventListener("click", () => {
  textContent.classList.add("switching");

  setTimeout(() => {
    textContent.classList.toggle("justified");

    // Change le texte du bouton
    toggleAlignBtn.textContent = textContent.classList.contains("justified")
      ? "Centrer"
      : "Justification";

    textContent.classList.remove("switching");
  }, 200);
});

// Init
renderScroll();

