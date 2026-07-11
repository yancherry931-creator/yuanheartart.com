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
