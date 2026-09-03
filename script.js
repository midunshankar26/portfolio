/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 700);

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    menuBtn.textContent =
        navLinks.classList.contains("show")
        ? "✕"
        : "☰";

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";

    });

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {

    document.body.classList.add("light");
    themeBtn.textContent = "☀️";

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const lightMode =
        document.body.classList.contains("light");

    themeBtn.textContent =
        lightMode ? "☀️" : "🌙";

    localStorage.setItem(
        "portfolioTheme",
        lightMode ? "light" : "dark"
    );

});


/* =========================================
   TYPING ANIMATION
========================================= */

const typingElement =
    document.getElementById("typing");

const words = [
    "B.Com IT Student",
    "Aspiring IT Professional",
    "Web Developer",
    "Creative Learner",
    "Python Learner",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );

}

typingEffect();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   BACK TO TOP
========================================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   CERTIFICATE MODAL
========================================= */

const certificate =
    document.getElementById("certificateImage");

const viewCertificate =
    document.getElementById("viewCertificate");

const modal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const closeModal =
    document.getElementById("closeModal");


viewCertificate.addEventListener("click", () => {

    modalImage.src = certificate.src;

    modal.classList.add("show");

});


certificate.addEventListener("click", () => {

    modalImage.src = certificate.src;

    modal.classList.add("show");

});


closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});


modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});


/* =========================================
   RESUME
========================================= */

const resumeBtn =
    document.getElementById("resumeBtn");

resumeBtn.addEventListener("click", () => {

    modalImage.src = "images/resume.jpg";

    modal.classList.add("show");

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    const subject =
        encodeURIComponent(
            "Portfolio Contact - " + name
        );

    const body =
        encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );


    window.location.href =
        `mailto:midunshankar2007@gmail.com?subject=${subject}&body=${body}`;

});


/* =========================================
   IMAGE FALLBACK
========================================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        console.log(
            "Image not found:",
            img.src
        );

    });

});


/* =========================================
   KEYBOARD THEME SHORTCUT
========================================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key.toLowerCase() === "d" &&
        event.target.tagName !== "INPUT" &&
        event.target.tagName !== "TEXTAREA"
    ) {

        themeBtn.click();

    }

});


console.log(
    "Midun Shankar K Portfolio Loaded Successfully 🚀"
);
