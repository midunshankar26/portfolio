document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const menuButton = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  const closeMenu = () => {
    navLinks.classList.remove("active");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-label", "Open menu");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Typing animation
  const words = [
    "B.Com IT Student",
    "Aspiring IT Professional",
    "Web Developer",
    "Creative Learner",
    "AI Enthusiast"
  ];

  const typingElement = document.querySelector(".typing");

  let wordIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  function type() {
    const word = words[wordIndex];

    characterIndex += deleting ? -1 : 1;
    typingElement.textContent = word.slice(0, characterIndex);

    if (!deleting && characterIndex === word.length) {
      deleting = true;
      setTimeout(type, 1400);
      return;
    }

    if (deleting && characterIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, deleting ? 55 : 95);
  }

  type();

  // Theme switcher
  const themeButton = document.querySelector("#theme-toggle");

  const themes = [
    { name: "morning", icon: "🌅" },
    { name: "afternoon", icon: "☀️" },
    { name: "evening", icon: "🌧️" },
    { name: "night", icon: "🌌" }
  ];

  let themeIndex = 0;

  function applyTheme() {
    document.body.classList.remove(...themes.map((theme) => theme.name));
    document.body.classList.add(themes[themeIndex].name);
    themeButton.textContent = themes[themeIndex].icon;
  }

  themeButton.addEventListener("click", () => {
    themeIndex = (themeIndex + 1) % themes.length;
    applyTheme();
  });

  // Scroll reveal animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll(
      ".section-title, .about-content, .skill-card, .project-card, .contact-container"
    )
    .forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

  // Navbar shadow and active link
  const header = document.querySelector("header");

  function updateNavigation() {
    header.classList.toggle("scrolled", window.scrollY > 50);

    let currentSection = "home";

    document.querySelectorAll("main section").forEach((section) => {
      if (window.scrollY >= section.offsetTop - 160) {
        currentSection = section.id;
      }
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.classList.toggle(
        "active",
        link.hash === `#${currentSection}`
      );
    });
  }

  window.addEventListener("scroll", updateNavigation, {
    passive: true
  });

  updateNavigation();

  // Contact form
  document
    .querySelector(".contact-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.currentTarget;

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      alert(
        `Thank you, ${form.elements.name.value.trim()}! Your message has been received.`
      );

      form.reset();
    });

  // Current year
  document.querySelector("#current-year").textContent =
    new Date().getFullYear();

  // Temporary project links
  document
    .querySelectorAll(".project-card a[href='#']")
    .forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Project link will be added soon.");
      });
    });
});
