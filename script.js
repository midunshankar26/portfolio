/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }, 700);

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon =
        menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    themeToggle.querySelector("i");


const savedTheme =
    localStorage.getItem("portfolioTheme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");


    if (isLight) {

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

        localStorage.setItem(
            "portfolioTheme",
            "light"
        );

    } else {

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

        localStorage.setItem(
            "portfolioTheme",
            "dark"
        );

    }

});


/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingElement =
    document.getElementById("typing");


const typingWords = [

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


function typeEffect() {

    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % typingWords.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );

}


typeEffect();


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   CERTIFICATE MODAL
===================================================== */

const certificateModal =
    document.getElementById(
        "certificateModal"
    );


function openCertificate() {

    certificateModal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


function closeCertificate() {

    certificateModal.classList.remove("show");

    document.body.style.overflow =
        "auto";

}


certificateModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            certificateModal
        ) {

            closeCertificate();

        }

    }
);


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();

        const email =
            document.getElementById(
                "email"
            ).value.trim();

        const subject =
            document.getElementById(
                "subject"
            ).value.trim();

        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            alert(
                "Please fill in all fields."
            );

            return;

        }


        const mailSubject =
            encodeURIComponent(
                subject
            );


        const mailBody =
            encodeURIComponent(

                "Name: " + name +
                "\nEmail: " + email +
                "\n\n" + message

            );


        window.location.href =
            `mailto:midunshankar2007@gmail.com?subject=${mailSubject}&body=${mailBody}`;


        contactForm.reset();

    }
);


/* =====================================================
   REVEAL ON SCROLL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .timeline-item, .certificate-card, .achievement-card, .resume-container, .contact-container"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


/* =====================================================
   CURSOR GLOW EFFECT
===================================================== */

document.addEventListener(
    "mousemove",
    event => {

        document.body.style.setProperty(
            "--mouse-x",
            event.clientX + "px"
        );

        document.body.style.setProperty(
            "--mouse-y",
            event.clientY + "px"
        );

    }
);