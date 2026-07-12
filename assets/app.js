const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const languageSelect = document.querySelector(".language-select");
const supportedLanguages = ["en", "fr", "de", "es", "zh"];
const originalTitle = document.title;
const originalDescriptions = new WeakMap();
const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();

const translations = {
  fr: {
    "Hand-Painted Oil Paintings & Custom Canvas Art | Yuan Heart Art": "Peintures a l'huile faites main et art sur toile sur mesure | Yuan Heart Art",
    "Contact | Yuan Heart Art Oil Art Trade": "Contact | Yuan Heart Art",
    "Shop Hand-Painted Oil Paintings | Yuan Heart Art": "Acheter des peintures a l'huile faites main | Yuan Heart Art",
    "Custom Oil Painting From Photo | Yuan Heart Art": "Peinture a l'huile sur mesure d'apres photo | Yuan Heart Art",
    "FAQ | Custom Oil Paintings and Wholesale Art | Yuan Heart Art": "FAQ | Peintures sur mesure et art en gros | Yuan Heart Art",
    "Home": "Accueil",
    "Shop": "Boutique",
    "Custom": "Sur mesure",
    "Custom Painting": "Peinture sur mesure",
    "Wholesale": "Gros",
    "Process": "Processus",
    "About": "A propos",
    "Contact": "Contact",
    "Request Quote": "Demander un devis",
    "Explore Artwork": "Voir les oeuvres",
    "Start a Custom Painting": "Commencer une commande",
    "Send Your Brief": "Envoyer votre brief",
    "Contact Irist": "Contacter Irist",
    "View Shop": "Voir la boutique",
    "View Collection": "Voir la collection",
    "Request Quote": "Demander un devis",
    "Contact Us": "Nous contacter",
    "Read Our Story": "Lire notre histoire",
    "Read full FAQ": "Lire toute la FAQ",
    "Quick links": "Liens rapides",
    "Contact details": "Coordonnees",
    "Name": "Nom",
    "Email": "E-mail",
    "Phone": "Telephone",
    "Message": "Message",
    "Submit Brief": "Envoyer le brief",
    "Your name": "Votre nom",
    "Share artwork type, size, quantity, style references, target budget, and timing.": "Indiquez le type d'oeuvre, la taille, la quantite, les references de style, le budget et le calendrier.",
    "Hand-painted oil paintings made by skilled artists": "Peintures a l'huile faites main par des artistes qualifies",
    "Custom canvas art for refined interiors, galleries, and public spaces": "Art sur toile sur mesure pour interieurs raffines, galeries et espaces publics",
    "Yuan Heart Art supplies hand-painted oil paintings, printed oil art, and custom artwork programs for Western home decor buyers, interior designers, museums, exhibition venues, hotels, and public art spaces.": "Yuan Heart Art fournit des peintures a l'huile faites main, de l'art imprime et des programmes artistiques sur mesure pour la decoration occidentale, les architectes d'interieur, musees, hotels et espaces publics.",
    "Putian Oil Painting Association partner": "Partenaire de l'association de peinture a l'huile de Putian",
    "Direct artist access": "Acces direct aux artistes",
    "Custom sizes and colors": "Tailles et couleurs sur mesure",
    "Wholesale and project supply": "Approvisionnement en gros et projets",
    "Core strengths": "Forces cles",
    "Art quality, trade reliability, and project clarity in one partner": "Qualite artistique, fiabilite commerciale et clarte projet",
    "Shop by style": "Choisir par style",
    "Oil painting collections for Western interiors": "Collections de peintures a l'huile pour interieurs occidentaux",
    "Custom workflow": "Flux de commande sur mesure",
    "From reference image to finished canvas": "De l'image de reference a la toile terminee",
    "Wholesale and trade": "Gros et professionnels",
    "Reliable art supply for designers, galleries, hotels, and decor brands": "Approvisionnement fiable pour designers, galeries, hotels et marques deco",
    "Buyer questions": "Questions d'acheteurs",
    "Quick answers before you request a quote": "Reponses rapides avant le devis",
    "Tell us about your space, artwork brief, and sourcing goals": "Parlez-nous de votre espace, de votre brief et de vos objectifs",
    "Hand-painted oil paintings and custom-ready canvas art": "Peintures a l'huile faites main et toiles personnalisables",
    "Custom oil paintings from photos, references, and room concepts": "Peintures a l'huile sur mesure depuis photos, references et concepts d'interieur",
    "Answers for custom oil painting and wholesale artwork buyers": "Reponses pour acheteurs de peintures sur mesure et en gros"
  },
  de: {
    "Hand-Painted Oil Paintings & Custom Canvas Art | Yuan Heart Art": "Handgemalte Oelgemaelde und massgefertigte Leinwandkunst | Yuan Heart Art",
    "Contact | Yuan Heart Art Oil Art Trade": "Kontakt | Yuan Heart Art",
    "Shop Hand-Painted Oil Paintings | Yuan Heart Art": "Handgemalte Oelgemaelde kaufen | Yuan Heart Art",
    "Custom Oil Painting From Photo | Yuan Heart Art": "Oelgemaelde nach Foto | Yuan Heart Art",
    "FAQ | Custom Oil Paintings and Wholesale Art | Yuan Heart Art": "FAQ | Massgemaelde und Kunst im Grosshandel | Yuan Heart Art",
    "Home": "Start",
    "Shop": "Shop",
    "Custom": "Massarbeit",
    "Custom Painting": "Massgemaelde",
    "Wholesale": "Grosshandel",
    "Process": "Prozess",
    "About": "Ueber uns",
    "Contact": "Kontakt",
    "Request Quote": "Angebot anfragen",
    "Explore Artwork": "Kunst ansehen",
    "Start a Custom Painting": "Massgemaelde starten",
    "Send Your Brief": "Briefing senden",
    "Contact Irist": "Irist kontaktieren",
    "View Shop": "Shop ansehen",
    "View Collection": "Kollektion ansehen",
    "Contact Us": "Kontakt aufnehmen",
    "Read Our Story": "Unsere Geschichte",
    "Read full FAQ": "FAQ lesen",
    "Quick links": "Schnelllinks",
    "Contact details": "Kontaktdaten",
    "Name": "Name",
    "Email": "E-Mail",
    "Phone": "Telefon",
    "Message": "Nachricht",
    "Submit Brief": "Briefing senden",
    "Your name": "Ihr Name",
    "Share artwork type, size, quantity, style references, target budget, and timing.": "Teilen Sie Kunsttyp, Groesse, Menge, Stilreferenzen, Budget und Zeitplan mit.",
    "Hand-painted oil paintings made by skilled artists": "Handgemalte Oelgemaelde von erfahrenen Kuenstlern",
    "Custom canvas art for refined interiors, galleries, and public spaces": "Massgefertigte Leinwandkunst fuer anspruchsvolle Innenraeume, Galerien und oeffentliche Raeume",
    "Yuan Heart Art supplies hand-painted oil paintings, printed oil art, and custom artwork programs for Western home decor buyers, interior designers, museums, exhibition venues, hotels, and public art spaces.": "Yuan Heart Art liefert handgemalte Oelgemaelde, Kunstdrucke und massgeschneiderte Kunstprogramme fuer westliche Einrichter, Designer, Museen, Hotels und oeffentliche Raeume.",
    "Putian Oil Painting Association partner": "Partner der Putian Oil Painting Association",
    "Direct artist access": "Direkter Zugang zu Kuenstlern",
    "Custom sizes and colors": "Massgroessen und Farben",
    "Wholesale and project supply": "Grosshandel und Projektlieferung",
    "Core strengths": "Kernstaerken",
    "Art quality, trade reliability, and project clarity in one partner": "Kunstqualitaet, Zuverlaessigkeit und klare Projektabwicklung",
    "Shop by style": "Nach Stil kaufen",
    "Oil painting collections for Western interiors": "Oelgemaelde-Kollektionen fuer westliche Innenraeume",
    "Custom workflow": "Ablauf fuer Massarbeiten",
    "From reference image to finished canvas": "Vom Referenzbild zur fertigen Leinwand",
    "Wholesale and trade": "Grosshandel und Handel",
    "Reliable art supply for designers, galleries, hotels, and decor brands": "Zuverlaessige Kunstlieferung fuer Designer, Galerien, Hotels und Dekormarken",
    "Buyer questions": "Kaeuferfragen",
    "Quick answers before you request a quote": "Kurze Antworten vor der Anfrage",
    "Tell us about your space, artwork brief, and sourcing goals": "Beschreiben Sie Raum, Kunstbriefing und Beschaffungsziel",
    "Hand-painted oil paintings and custom-ready canvas art": "Handgemalte Oelgemaelde und anpassbare Leinwandkunst",
    "Custom oil paintings from photos, references, and room concepts": "Massgefertigte Oelgemaelde nach Fotos, Referenzen und Raumkonzepten",
    "Answers for custom oil painting and wholesale artwork buyers": "Antworten fuer Kaeufer von Massgemaelden und Grosshandelskunst"
  },
  es: {
    "Hand-Painted Oil Paintings & Custom Canvas Art | Yuan Heart Art": "Oleos pintados a mano y arte en lienzo personalizado | Yuan Heart Art",
    "Contact | Yuan Heart Art Oil Art Trade": "Contacto | Yuan Heart Art",
    "Shop Hand-Painted Oil Paintings | Yuan Heart Art": "Comprar oleos pintados a mano | Yuan Heart Art",
    "Custom Oil Painting From Photo | Yuan Heart Art": "Oleo personalizado desde foto | Yuan Heart Art",
    "FAQ | Custom Oil Paintings and Wholesale Art | Yuan Heart Art": "FAQ | Oleos personalizados y arte al por mayor | Yuan Heart Art",
    "Home": "Inicio",
    "Shop": "Tienda",
    "Custom": "A medida",
    "Custom Painting": "Pintura a medida",
    "Wholesale": "Mayorista",
    "Process": "Proceso",
    "About": "Nosotros",
    "Contact": "Contacto",
    "Request Quote": "Solicitar cotizacion",
    "Explore Artwork": "Ver obras",
    "Start a Custom Painting": "Iniciar pedido a medida",
    "Send Your Brief": "Enviar briefing",
    "Contact Irist": "Contactar a Irist",
    "View Shop": "Ver tienda",
    "View Collection": "Ver coleccion",
    "Contact Us": "Contactanos",
    "Read Our Story": "Leer historia",
    "Read full FAQ": "Leer FAQ",
    "Quick links": "Enlaces rapidos",
    "Contact details": "Datos de contacto",
    "Name": "Nombre",
    "Email": "Email",
    "Phone": "Telefono",
    "Message": "Mensaje",
    "Submit Brief": "Enviar briefing",
    "Your name": "Tu nombre",
    "Share artwork type, size, quantity, style references, target budget, and timing.": "Comparte tipo de obra, tamano, cantidad, referencias de estilo, presupuesto y plazo.",
    "Hand-painted oil paintings made by skilled artists": "Oleos pintados a mano por artistas expertos",
    "Custom canvas art for refined interiors, galleries, and public spaces": "Arte en lienzo personalizado para interiores elegantes, galerias y espacios publicos",
    "Yuan Heart Art supplies hand-painted oil paintings, printed oil art, and custom artwork programs for Western home decor buyers, interior designers, museums, exhibition venues, hotels, and public art spaces.": "Yuan Heart Art suministra oleos pintados a mano, arte impreso y programas artisticos personalizados para compradores de decoracion, interioristas, museos, hoteles y espacios publicos.",
    "Putian Oil Painting Association partner": "Socio de la Asociacion de Pintura al Oleo de Putian",
    "Direct artist access": "Acceso directo a artistas",
    "Custom sizes and colors": "Tamanos y colores a medida",
    "Wholesale and project supply": "Suministro mayorista y por proyecto",
    "Core strengths": "Fortalezas clave",
    "Art quality, trade reliability, and project clarity in one partner": "Calidad artistica, fiabilidad comercial y claridad de proyecto",
    "Shop by style": "Comprar por estilo",
    "Oil painting collections for Western interiors": "Colecciones de oleos para interiores occidentales",
    "Custom workflow": "Flujo a medida",
    "From reference image to finished canvas": "De la referencia al lienzo terminado",
    "Wholesale and trade": "Mayorista y trade",
    "Reliable art supply for designers, galleries, hotels, and decor brands": "Suministro fiable para disenadores, galerias, hoteles y marcas de decoracion",
    "Buyer questions": "Preguntas de compradores",
    "Quick answers before you request a quote": "Respuestas rapidas antes de cotizar",
    "Tell us about your space, artwork brief, and sourcing goals": "Cuentanos sobre tu espacio, briefing y objetivos",
    "Hand-painted oil paintings and custom-ready canvas art": "Oleos pintados a mano y lienzos listos para personalizar",
    "Custom oil paintings from photos, references, and room concepts": "Oleos personalizados desde fotos, referencias y conceptos de interior",
    "Answers for custom oil painting and wholesale artwork buyers": "Respuestas para compradores de oleos personalizados y al por mayor"
  },
  zh: {
    "Hand-Painted Oil Paintings & Custom Canvas Art | Yuan Heart Art": "鎵嬬粯娌圭敾涓庡畾鍒惰楗扮敾 | Yuan Heart Art",
    "Contact | Yuan Heart Art Oil Art Trade": "鑱旂郴鎴戜滑 | Yuan Heart Art",
    "Shop Hand-Painted Oil Paintings | Yuan Heart Art": "鎵嬬粯娌圭敾浣滃搧 | Yuan Heart Art",
    "Custom Oil Painting From Photo | Yuan Heart Art": "鐓х墖瀹氬埗鎵嬬粯娌圭敾 | Yuan Heart Art",
    "FAQ | Custom Oil Paintings and Wholesale Art | Yuan Heart Art": "甯歌闂 | 瀹氬埗娌圭敾涓庢壒鍙戣壓鏈搧 | Yuan Heart Art",
    "Home": "棣栭〉",
    "Shop": "浣滃搧",
    "Custom": "瀹氬埗",
    "Custom Painting": "瀹氬埗娌圭敾",
    "Wholesale": "鎵瑰彂",
    "Process": "娴佺▼",
    "About": "鍏充簬",
    "Contact": "鑱旂郴",
    "Request Quote": "鑾峰彇鎶ヤ环",
    "Explore Artwork": "娴忚浣滃搧",
    "Start a Custom Painting": "寮€濮嬪畾鍒舵补鐢?,
    "Send Your Brief": "鍙戦€侀渶姹?,
    "Contact Irist": "鑱旂郴 Irist",
    "View Shop": "鏌ョ湅浣滃搧",
    "View Collection": "鏌ョ湅绯诲垪",
    "Contact Us": "鑱旂郴鎴戜滑",
    "Read Our Story": "浜嗚В鎴戜滑",
    "Read full FAQ": "鏌ョ湅瀹屾暣 FAQ",
    "Quick links": "蹇€熼摼鎺?,
    "Contact details": "鑱旂郴鏂瑰紡",
    "Name": "濮撳悕",
    "Email": "閭",
    "Phone": "鐢佃瘽",
    "Message": "鐣欒█",
    "Submit Brief": "鎻愪氦闇€姹?,
    "Your name": "鎮ㄧ殑濮撳悕",
    "Share artwork type, size, quantity, style references, target budget, and timing.": "璇峰～鍐欑敾浣滅被鍨嬨€佸昂瀵搞€佹暟閲忋€侀鏍煎弬鑰冦€侀绠楀拰鏃堕棿瑕佹眰銆?,
    "Hand-painted oil paintings made by skilled artists": "鐢变笓涓氱敾甯堝垱浣滅殑鎵嬬粯娌圭敾",
    "Custom canvas art for refined interiors, galleries, and public spaces": "涓洪珮绔灞呫€佺敾寤婁笌鍏叡绌洪棿瀹氬埗鐢讳綔",
    "Yuan Heart Art supplies hand-painted oil paintings, printed oil art, and custom artwork programs for Western home decor buyers, interior designers, museums, exhibition venues, hotels, and public art spaces.": "Yuan Heart Art 涓烘缇庡瑁呬拱瀹躲€佸鍐呰璁″笀銆佸崥鐗╅銆佸睍瑙堢┖闂淬€侀厭搴楀拰鍏叡鑹烘湳绌洪棿鎻愪緵鎵嬬粯娌圭敾銆佸嵃鍒锋补鐢讳笌瀹氬埗鑹烘湳鏂规銆?,
    "Putian Oil Painting Association partner": "鑾嗙敯甯傛补鐢诲崗浼氬悎浣滃叕鍙?,
    "Direct artist access": "涓€鎵嬬敾甯堣祫婧?,
    "Custom sizes and colors": "灏哄涓庤壊褰╁彲瀹氬埗",
    "Wholesale and project supply": "鎵瑰彂涓庨」鐩緵搴?,
    "Core strengths": "鏍稿績浼樺娍",
    "Art quality, trade reliability, and project clarity in one partner": "鍝佽川銆佷氦浠樹笌椤圭洰娌熼€氬吋鍏?,
    "Shop by style": "鎸夐鏍兼祻瑙?,
    "Oil painting collections for Western interiors": "閫傚悎娆х編绌洪棿鐨勬补鐢荤郴鍒?,
    "Custom workflow": "瀹氬埗娴佺▼",
    "From reference image to finished canvas": "浠庡弬鑰冨浘鍒板畬鎴愮敾浣?,
    "Wholesale and trade": "鎵瑰彂涓庤锤鏄撳悎浣?,
    "Reliable art supply for designers, galleries, hotels, and decor brands": "涓鸿璁″笀銆佺敾寤娿€侀厭搴楀拰瀹跺眳鍝佺墝鎻愪緵绋冲畾鑹烘湳鍝佷緵搴?,
    "Buyer questions": "涔板闂",
    "Quick answers before you request a quote": "鎶ヤ环鍓嶇殑甯歌瑙ｇ瓟",
    "Tell us about your space, artwork brief, and sourcing goals": "鍛婅瘔鎴戜滑鎮ㄧ殑绌洪棿銆佺敾浣滈渶姹傚拰閲囪喘鐩爣",
    "Hand-painted oil paintings and custom-ready canvas art": "鎵嬬粯娌圭敾涓庡彲瀹氬埗鐢讳綔",
    "Custom oil paintings from photos, references, and room concepts": "鏍规嵁鐓х墖銆佸弬鑰冨浘鍜岀┖闂存蹇靛畾鍒舵补鐢?,
    "Answers for custom oil painting and wholesale artwork buyers": "瀹氬埗娌圭敾涓庢壒鍙戦噰璐父瑙侀棶棰?
  }
};

const attributeTranslations = {
  placeholder: translations,
  "aria-label": translations,
  alt: translations
};

function getRequestedLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang") || localStorage.getItem("yuanheartart-language") || "en";
  return supportedLanguages.includes(requested) ? requested : "en";
}

function preserveSpacing(original, translated) {
  const leading = original.match(/^\s*/)[0];
  const trailing = original.match(/\s*$/)[0];
  return `${leading}${translated}${trailing}`;
}

function translateTextNodes(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const dictionary = translations[language] || {};
  let node = walker.nextNode();
  while (node) {
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node);
    const key = original.trim();
    node.nodeValue = language === "en" || !dictionary[key]
      ? original
      : preserveSpacing(original, dictionary[key]);
    node = walker.nextNode();
  }
}

function translateAttributes(language) {
  const dictionary = translations[language] || {};
  document.querySelectorAll("[placeholder], [aria-label], img[alt]").forEach((element) => {
    ["placeholder", "aria-label", "alt"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const key = `${attribute}:${element.getAttribute(attribute)}`;
      if (!originalAttributes.has(element)) originalAttributes.set(element, {});
      const originals = originalAttributes.get(element);
      if (!originals[attribute]) originals[attribute] = element.getAttribute(attribute);
      const original = originals[attribute];
      element.setAttribute(attribute, language === "en" || !dictionary[original] ? original : dictionary[original]);
    });
  });
}

function syncLanguageLinks(language) {
  document.querySelectorAll('a[href$=".html"], a[href="index.html"]').forEach((link) => {
    const original = link.getAttribute("data-original-href") || link.getAttribute("href");
    link.setAttribute("data-original-href", original);
    if (language === "en") {
      link.setAttribute("href", original);
      return;
    }
    const url = new URL(original, window.location.href);
    url.searchParams.set("lang", language);
    link.setAttribute("href", `${url.pathname.split("/").pop()}${url.search}`);
  });
}

function updateLanguageUrl(language) {
  const url = new URL(window.location.href);
  if (language === "en") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", language);
  }
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function applyLanguage(language) {
  document.documentElement.setAttribute("lang", language === "zh" ? "zh-CN" : language);
  document.title = language === "en" || !translations[language][originalTitle]
    ? originalTitle
    : translations[language][originalTitle];
  translateTextNodes(language);
  translateAttributes(language);
  syncLanguageLinks(language);
  if (languageSelect) languageSelect.value = language;
}

let activeLanguage = getRequestedLanguage();
applyLanguage(activeLanguage);

if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    activeLanguage = languageSelect.value;
    localStorage.setItem("yuanheartart-language", activeLanguage);
    updateLanguageUrl(activeLanguage);
    applyLanguage(activeLanguage);
  });
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    document.querySelectorAll("[data-filter]").forEach((item) => {
      item.classList.toggle("selected", item === button);
    });
    document.querySelectorAll("[data-category]").forEach((card) => {
      card.style.display =
        filter === "All" || card.getAttribute("data-category") === filter
          ? ""
          : "none";
    });
  });
});

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const message = formData.get("message") || "";
    const subject = encodeURIComponent("Artwork brief from yuanheartart.com");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nProject brief:\n${message}`
    );
    const note = contactForm.querySelector(".form-note");
    if (note) {
      note.classList.add("visible");
      note.innerHTML =
        'Your brief is ready. <a href="mailto:379500068@qq.com?subject=' +
        subject +
        "&body=" +
        body +
        '">Email Irist</a> or <a href="https://wa.me/8618235608457?text=' +
        body +
        '" target="_blank" rel="noreferrer">send it on WhatsApp</a>.';
    }
  });
}

const YH_PRODUCTS = [
  {
    id: "yh-abs-001",
    name: "Quiet Neutral Abstract",
    style: "Abstract",
    room: "Living Room",
    color: "Neutral",
    orientation: "Landscape",
    texture: "Visible Brushwork",
    status: "Made to Order",
    badge: "Bestseller",
    price: 189,
    sizes: ["60 x 90 cm", "80 x 120 cm", "100 x 150 cm"],
    production: "12-18 business days",
    shipping: "7-12 business days",
    format: "Rolled canvas or framed",
    image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=900&q=82",
    url: "quiet-neutral-abstract-oil-painting.html"
  },
  {
    id: "yh-tex-002",
    name: "Textured Earth Tone Canvas",
    style: "Textured",
    room: "Bedroom",
    color: "Earth Tones",
    orientation: "Square",
    texture: "Heavy Texture",
    status: "Made to Order",
    badge: "Preview Before Shipping",
    price: 229,
    sizes: ["70 x 70 cm", "90 x 90 cm", "120 x 120 cm"],
    production: "15-22 business days",
    shipping: "7-14 business days",
    format: "Gallery wrapped or framed",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=900&q=82",
    url: "textured-earth-tone-canvas.html"
  },
  {
    id: "yh-land-003",
    name: "Soft Landscape Commission",
    style: "Landscape",
    room: "Dining Room",
    color: "Green",
    orientation: "Landscape",
    texture: "Smooth Brushwork",
    status: "Customizable Design",
    badge: "Custom Size",
    price: 205,
    sizes: ["50 x 70 cm", "70 x 100 cm", "90 x 130 cm"],
    production: "12-20 business days",
    shipping: "7-12 business days",
    format: "Rolled canvas",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=82",
    url: "soft-landscape-commission.html"
  },
  {
    id: "yh-floral-004",
    name: "Botanical Floral Oil Painting",
    style: "Floral",
    room: "Bedroom",
    color: "Colorful",
    orientation: "Portrait",
    texture: "Visible Brushwork",
    status: "Ready to Ship",
    badge: "Ships in 2-3 Business Days",
    price: 168,
    sizes: ["60 x 80 cm"],
    production: "Ready to ship",
    shipping: "7-10 business days",
    format: "Framed & ready to hang",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=82",
    url: "botanical-floral-oil-painting.html"
  },
  {
    id: "yh-large-005",
    name: "Large Wall Art Triptych",
    style: "Abstract",
    room: "Hotel & Commercial",
    color: "Blue",
    orientation: "Set of 3",
    texture: "Palette Knife",
    status: "Made to Order",
    badge: "Trade Favorite",
    price: 420,
    sizes: ["3 x 50 x 70 cm", "3 x 70 x 100 cm"],
    production: "18-28 business days",
    shipping: "10-18 business days",
    format: "Rolled canvas or framed",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=82",
    url: "large-wall-art-triptych.html"
  },
  {
    id: "yh-port-006",
    name: "Custom Portrait From Photo",
    style: "Portrait",
    room: "Gift",
    color: "Custom",
    orientation: "Portrait",
    texture: "Smooth Brushwork",
    status: "Custom From Photo",
    badge: "30% Deposit",
    price: 160,
    sizes: ["40 x 50 cm", "50 x 70 cm", "70 x 90 cm"],
    production: "12-21 business days",
    shipping: "7-12 business days",
    format: "Rolled canvas or framed",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=82",
    url: "custom-portrait-from-photo.html"
  },
  {
    id: "yh-min-007",
    name: "Minimal Black and White Painting",
    style: "Minimalist",
    room: "Office",
    color: "Black & White",
    orientation: "Portrait",
    texture: "Smooth Brushwork",
    status: "Made to Order",
    badge: "8 sizes",
    price: 175,
    sizes: ["50 x 70 cm", "70 x 100 cm", "90 x 120 cm"],
    production: "12-18 business days",
    shipping: "7-12 business days",
    format: "Rolled canvas",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=82",
    url: "minimal-black-white-oil-painting.html"
  },
  {
    id: "yh-hotel-008",
    name: "Hospitality Neutral Series",
    style: "Abstract",
    room: "Hotel & Commercial",
    color: "Neutral",
    orientation: "Set of 2",
    texture: "Visible Brushwork",
    status: "Wholesale / Project",
    badge: "Trade Pricing",
    price: 0,
    sizes: ["Project quote"],
    production: "Quoted by quantity",
    shipping: "Quoted by destination",
    format: "Custom packaging",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=82",
    url: "hospitality-neutral-series.html"
  }
];

const storage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch (_) {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

function trackEvent(name, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}

function getCart() {
  return storage.get("yh-cart", []);
}

function setCart(cart) {
  storage.set("yh-cart", cart);
  updateCartCount();
}

function getWishlist() {
  return storage.get("yh-wishlist", []);
}

function setWishlist(items) {
  storage.set("yh-wishlist", items);
}

function money(value) {
  return value ? `From $${value}` : "Request trade pricing";
}

function productById(id) {
  return YH_PRODUCTS.find((item) => item.id === id);
}

function whatsappUrl(message, source = "site") {
  const url = new URL("https://wa.me/8618235608457");
  url.searchParams.set("text", `${message}\n\nSource: ${source}\nPage: ${document.title}\nURL: ${window.location.href}`);
  return url.toString();
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function updateCartCount() {
  document.querySelectorAll("[data-cart-count]").forEach((item) => {
    item.textContent = String(getCart().reduce((total, line) => total + line.qty, 0));
  });
}

function addToCart(productId, size) {
  const cart = getCart();
  const existing = cart.find((line) => line.productId === productId && line.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ productId, size, qty: 1 });
  }
  setCart(cart);
  trackEvent("add_to_cart", { product_id: productId, size });
  showToast("Added to cart. Checkout or keep browsing.");
}

function toggleWishlist(productId) {
  const items = getWishlist();
  const next = items.includes(productId)
    ? items.filter((id) => id !== productId)
    : [...items, productId];
  setWishlist(next);
  trackEvent("add_to_wishlist", { product_id: productId, saved: next.includes(productId) });
  renderProductGrid();
}

function renderProductGrid() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;
  const form = document.querySelector("[data-catalog-filters]");
  const data = form ? new FormData(form) : new FormData();
  const query = String(data.get("q") || "").trim().toLowerCase();
  const matches = YH_PRODUCTS.filter((product) => {
    const haystack = [product.name, product.style, product.color, product.room, product.orientation, product.status, product.texture].join(" ").toLowerCase();
    return (!query || haystack.includes(query)) &&
      (!data.get("style") || product.style === data.get("style")) &&
      (!data.get("room") || product.room === data.get("room")) &&
      (!data.get("color") || product.color === data.get("color")) &&
      (!data.get("status") || product.status === data.get("status"));
  });
  const wishlist = getWishlist();
  document.querySelectorAll("[data-product-count]").forEach((node) => {
    node.textContent = `${matches.length} curated products`;
  });
  grid.innerHTML = matches.length ? matches.map((product) => {
    const saved = wishlist.includes(product.id);
    return `<article class="product-card" data-category="${product.status}">
      <button class="wishlist-toggle ${saved ? "saved" : ""}" type="button" data-wishlist="${product.id}" aria-label="Save ${product.name}">${saved ? "鈾? : "鈾?}</button>
      <a class="product-image-link" href="${product.url}" aria-label="View details for ${product.name}"><img src="${product.image}" alt="${product.name} shown for ${product.room}" loading="lazy"></a>
      <div>
        <span>${product.badge}</span>
        <h2><a href="${product.url}">${product.name}</a></h2>
        <p class="product-price">${money(product.price)}</p>
        <div class="product-facts"><span>${product.status}</span><span>${product.sizes.length} sizes</span><span>${product.texture}</span></div>
        <p>${product.style} artwork for ${product.room}. ${product.production}. Preview before shipping.</p>
        <div class="card-actions">
          <button type="button" data-quick-view="${product.id}">Quick View</button>
          <a class="mini-link secondary-mini" href="${product.url}">View Details</a>
          <button type="button" class="secondary-mini" data-add-cart="${product.id}">Add to Cart</button>
          <a class="mini-link secondary-mini" href="${whatsappUrl(`I need help choosing size for ${product.name}.`, `product:${product.id}`)}" target="_blank" rel="noreferrer" data-whatsapp-source="product_card">Ask Size</a>
          <a class="mini-link secondary-mini" href="${whatsappUrl(`Please quote best price for ${product.name}.`, `offer:${product.id}`)}" target="_blank" rel="noreferrer" data-whatsapp-source="make_offer">Make Offer</a>
        </div>
      </div>
    </article>`;
  }).join("") : `<div class="no-results"><h2>No exact results.</h2><p>Try Abstract, Neutral, Large, Ready to Ship, or send a wall photo on WhatsApp and Irist will suggest suitable artwork.</p><a class="primary-button dark" href="${whatsappUrl("Please help me find a painting. My preferred style/size is:", "search_no_results")}" target="_blank" rel="noreferrer">Ask on WhatsApp</a></div>`;
}

function openQuickView(productId) {
  const product = productById(productId);
  if (!product) return;
  let modal = document.querySelector(".modal-backdrop");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "modal-backdrop";
    document.body.appendChild(modal);
  }
  modal.innerHTML = `<div class="commerce-modal">
    <button class="modal-close" type="button" aria-label="Close">脳</button>
    <div class="quick-view-grid">
      <img src="${product.image}" alt="${product.name} room and texture preview">
      <div>
        <p class="eyebrow">${product.badge}</p>
        <h2>${product.name}</h2>
        <p class="product-price">${money(product.price)}</p>
        <div class="quick-facts"><span>${product.status}</span><span>${product.format}</span><span>${product.production}</span><span>${product.shipping}</span></div>
        <label>Size<select data-modal-size>${product.sizes.map((size) => `<option>${size}</option>`).join("")}</select></label>
        <details class="size-guide" open><summary>Size and delivery notes</summary><p>Need help choosing? Send a wall photo. Duties and import taxes may apply depending on destination country. Hand-painted works may have natural brushwork variation.</p></details>
        <div class="wizard-controls">
          <button type="button" data-modal-add="${product.id}">Add to Cart</button>
          <a class="primary-button dark" href="${whatsappUrl(`I am interested in ${product.name}. Please advise size, framing and shipping.`, `quick_view:${product.id}`)}" target="_blank" rel="noreferrer">Ask on WhatsApp</a>
        </div>
      </div>
    </div>
  </div>`;
  modal.classList.add("open");
  trackEvent("view_item", { product_id: product.id });
}

function injectCommerceTools() {
  if (!document.querySelector(".header-tools")) {
    document.querySelectorAll(".site-header").forEach((header) => {
      const tools = document.createElement("div");
      tools.className = "header-tools";
      tools.innerHTML = `<button class="icon-action" type="button" data-search-open aria-label="Search">鈱?/button><a class="icon-action" href="cart.html" aria-label="Cart">Bag<span class="cart-count" data-cart-count>0</span></a>`;
      const lang = header.querySelector(".language-switcher");
      if (lang) header.insertBefore(tools, lang);
    });
  }
  if (!document.querySelector(".mobile-bottom-nav")) {
    const nav = document.createElement("nav");
    nav.className = "mobile-bottom-nav";
    nav.innerHTML = `<a href="index.html">Home</a><a href="shop.html">Shop</a><a href="custom-oil-painting.html">Custom</a><a href="cart.html">Cart <span data-cart-count>0</span></a>`;
    document.body.appendChild(nav);
  }
  document.querySelectorAll(".whatsapp-float").forEach((link) => {
    link.href = whatsappUrl("Need help choosing art. Please advise.", "floating_whatsapp");
    link.addEventListener("click", () => trackEvent("whatsapp_click", { source: "floating" }));
  });
  updateCartCount();
}

function openSearch() {
  let overlay = document.querySelector(".search-backdrop");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "search-backdrop";
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = `<div class="search-modal"><button class="modal-close" type="button" aria-label="Close">脳</button><h2>Find art by style, color, room or SKU</h2><label class="sr-only" for="site-search">Search</label><input id="site-search" type="search" placeholder="blue abstract, large neutral painting, hotel wall art"><div class="search-results"></div></div>`;
  overlay.classList.add("open");
  const input = overlay.querySelector("#site-search");
  const results = overlay.querySelector(".search-results");
  function render() {
    const q = input.value.toLowerCase();
    const list = YH_PRODUCTS.filter((product) => [product.id, product.name, product.style, product.color, product.room, product.status].join(" ").toLowerCase().includes(q)).slice(0, 6);
    results.innerHTML = q && list.length ? list.map((product) => `<a class="search-result" href="shop.html?q=${encodeURIComponent(q)}"><strong>${product.name}</strong><p>${product.style} 路 ${product.color} 路 ${money(product.price)}</p></a>`).join("") : `<div class="search-result"><strong>Popular searches</strong><p>large neutral painting, textured oil painting, ready to ship, hotel wall art, custom portrait</p></div>`;
  }
  input.addEventListener("input", render);
  input.focus();
  render();
}

function renderCart() {
  const container = document.querySelector("[data-cart-items]");
  if (!container) return;
  const cart = getCart();
  if (!cart.length) {
    container.innerHTML = `<div class="checkout-card"><h2>Your cart is empty.</h2><p>Browse bestsellers, made-to-order artwork, or start a custom painting.</p><a class="primary-button dark" href="shop.html">Shop Artwork</a></div>`;
    return;
  }
  let total = 0;
  container.innerHTML = cart.map((line, index) => {
    const product = productById(line.productId);
    if (!product) return "";
    total += product.price * line.qty;
    return `<article class="cart-line">
      <img src="${product.image}" alt="${product.name}">
      <div><h2>${product.name}</h2><p>${line.size} / ${product.status}</p><p>${product.production}; ${product.shipping}</p><p class="product-price">${product.price ? `$${product.price * line.qty}` : "Quoted by project"}</p><button type="button" data-remove-cart="${index}">Remove</button></div>
    </article>`;
  }).join("");
  document.querySelectorAll("[data-cart-total]").forEach((node) => {
    node.textContent = total ? `$${total}` : "Trade quote";
  });
}

function renderCheckout() {
  const form = document.querySelector("[data-checkout-form]");
  if (!form) return;
  renderCart();
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const orderId = `YH-${Date.now().toString().slice(-6)}`;
    const formData = new FormData(form);
    const cart = getCart();
    const cartSummary = cart.map((line) => {
      const product = productById(line.productId);
      return product ? `${product.name} (${line.size}, qty ${line.qty})` : "";
    }).filter(Boolean).join("; ") || "No cart item selected yet";
    const cartValue = cart.reduce((sum, line) => {
      const product = productById(line.productId);
      return sum + (product ? product.price * line.qty : 0);
    }, 0);
    const paymentMethod = formData.get("paymentMethod");
    const paymentPlan = formData.get("paymentPlan");
    storage.set("yh-last-order", {
      orderId,
      name: formData.get("firstName"),
      email: formData.get("email"),
      country: formData.get("country"),
      paymentMethod,
      paymentPlan,
      status: "Order received"
    });
    trackEvent("begin_checkout", { order_id: orderId, payment_method: paymentMethod, payment_plan: paymentPlan, value: cartValue, currency: "USD" });
    trackEvent("payment_method_selected", { order_id: orderId, payment_method: paymentMethod, payment_plan: paymentPlan });
    const message = `New checkout request ${orderId}. Name: ${formData.get("firstName")} ${formData.get("lastName")}. Email: ${formData.get("email")}. Phone: ${formData.get("phone") || "not provided"}. Country: ${formData.get("country")}. Payment plan: ${paymentPlan}. Preferred payment: ${paymentMethod}. Cart: ${cartSummary}. Subtotal before shipping/tax: ${cartValue ? `$${cartValue}` : "quote needed"}. Coupon: ${formData.get("coupon") || "none"}. Please confirm delivery cost and send the secure payment instruction.`;
    window.location.href = whatsappUrl(message, "checkout");
  });
}

function renderOrderStatus() {
  const target = document.querySelector("[data-order-status]");
  if (!target) return;
  const order = storage.get("yh-last-order", { orderId: "YH-DEMO", status: "Preview ready" });
  const steps = ["Order received", "Artist assigned", "Composition confirmed", "Painting in progress", "Drying", "Quality check", "Preview ready", "Approved", "Framing", "Shipped"];
  const active = Math.max(0, steps.indexOf(order.status));
  target.innerHTML = `<div class="status-card"><h2>${order.orderId}</h2><p>Track high-value custom work from deposit to delivery. Approvals and balance payment should be confirmed by invoice or WhatsApp.</p>${steps.map((step, index) => `<div class="status-step ${index <= active ? "done" : ""}"><span>${index + 1}</span><div><strong>${step}</strong><p>${index === active ? "Current stage" : "Project milestone"}</p></div></div>`).join("")}</div>`;
}

function initCustomWizard() {
  const wizard = document.querySelector("[data-custom-wizard]");
  if (!wizard) return;
  let step = 0;
  const steps = [...wizard.querySelectorAll(".wizard-step")];
  const nav = wizard.querySelector(".wizard-steps");
  function show() {
    steps.forEach((item, index) => item.classList.toggle("active", index === step));
    nav.innerHTML = steps.map((_, index) => `<span class="${index === step ? "active" : ""}">${index + 1}</span>`).join("");
  }
  wizard.addEventListener("click", (event) => {
    const next = event.target.closest("[data-wizard-next]");
    const prev = event.target.closest("[data-wizard-prev]");
    const submit = event.target.closest("[data-wizard-submit]");
    if (next) step = Math.min(step + 1, steps.length - 1);
    if (prev) step = Math.max(step - 1, 0);
    if (submit) {
      const data = new FormData(wizard);
      const files = [...wizard.querySelectorAll('input[type="file"]')].flatMap((input) => [...input.files].map((file) => file.name)).join(", ");
      const message = `Custom painting request. Type: ${data.get("type")}. Size: ${data.get("size")}. Style: ${data.get("style")}. Deposit model: 30% start, balance after approval. Files selected: ${files || "I will send files in chat"}. Notes: ${data.get("notes") || ""}`;
      trackEvent("quote_submit", { type: "custom_painting" });
      window.open(whatsappUrl(message, "custom_wizard"), "_blank", "noopener");
    }
    show();
  });
  show();
}

function initTradeForm() {
  const form = document.querySelector("[data-trade-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const message = `Trade quote request. Buyer type: ${data.get("buyerType")}. Quantity: ${data.get("quantity")}. Delivery country: ${data.get("country")}. Need sample: ${data.get("sample")}. Project brief: ${data.get("brief")}`;
    trackEvent("trade_catalog_request", { buyer_type: data.get("buyerType") });
    window.open(whatsappUrl(message, "trade_form"), "_blank", "noopener");
  });
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-search-open]")) openSearch();
  if (event.target.closest(".modal-close") || event.target.classList.contains("modal-backdrop") || event.target.classList.contains("search-backdrop")) {
    document.querySelectorAll(".modal-backdrop, .search-backdrop").forEach((item) => item.classList.remove("open"));
  }
  const quick = event.target.closest("[data-quick-view]");
  if (quick) openQuickView(quick.getAttribute("data-quick-view"));
  const add = event.target.closest("[data-add-cart]");
  if (add) {
    const product = productById(add.getAttribute("data-add-cart"));
    addToCart(product.id, product.sizes[0]);
  }
  const modalAdd = event.target.closest("[data-modal-add]");
  if (modalAdd) addToCart(modalAdd.getAttribute("data-modal-add"), document.querySelector("[data-modal-size]")?.value || "Custom size");
  const wish = event.target.closest("[data-wishlist]");
  if (wish) toggleWishlist(wish.getAttribute("data-wishlist"));
  const remove = event.target.closest("[data-remove-cart]");
  if (remove) {
    const cart = getCart();
    cart.splice(Number(remove.getAttribute("data-remove-cart")), 1);
    setCart(cart);
    renderCart();
  }
  const whatsapp = event.target.closest("[data-whatsapp-source]");
  if (whatsapp) trackEvent("whatsapp_click", { source: whatsapp.getAttribute("data-whatsapp-source") });
});

document.querySelector("[data-catalog-filters]")?.addEventListener("input", () => {
  renderProductGrid();
  trackEvent("select_item_variant", { filter: "catalog" });
});

injectCommerceTools();
renderProductGrid();
renderCart();
renderCheckout();
renderOrderStatus();
initCustomWizard();
initTradeForm();
if (typeof applyLanguage === "function") applyLanguage(activeLanguage);
