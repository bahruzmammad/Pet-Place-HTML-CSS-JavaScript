const menuButton = document.getElementById("menu-button");
const navigationLinks = document.getElementById("navigation-links");
const menuButtonIcon = menuButton.querySelector("i");

menuButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("open");

  const isOpen = navigationLinks.classList.contains("open");

  menuButtonIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-line",
  );
});

navigationLinks.addEventListener("click", () => {
  navigationLinks.classList.remove("open");
  menuButtonIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".hero-content h4", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".hero-content h1", {
  ...scrollRevealOptions,
  delay: 500,
});

ScrollReveal().reveal(".hero-content h2", {
  ...scrollRevealOptions,
  delay: 1000,
});

ScrollReveal().reveal(".hero-content p", {
  ...scrollRevealOptions,
  delay: 1500,
});

ScrollReveal().reveal(".hero-button", {
  ...scrollRevealOptions,
  delay: 2000,
});

ScrollReveal().reveal(".introduction-card", {
  ...scrollRevealOptions,
  interval: 500,
});

ScrollReveal().reveal(".about-row .about-image img", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".about-row:nth-of-type(2) .about-image img", {
  ...scrollRevealOptions,
  origin: "right",
});

ScrollReveal().reveal(".about-icon", {
  ...scrollRevealOptions,
  delay: 500,
});

ScrollReveal().reveal(".about-content h4", {
  ...scrollRevealOptions,
  delay: 1000,
});

ScrollReveal().reveal(".about-content p", {
  ...scrollRevealOptions,
  delay: 1500,
});

ScrollReveal().reveal(".product-card", {
  ...scrollRevealOptions,
  interval: 500,
});

ScrollReveal().reveal(".service-card", {
  duration: 1000,
  interval: 500,
});

const testimonialsSlider = new Swiper(".testimonials-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

ScrollReveal().reveal(".instagram-grid img", {
  duration: 1000,
  interval: 500,
});
