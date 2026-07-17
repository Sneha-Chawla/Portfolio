/*==========================================
            TYPING EFFECT
==========================================*/

const words = [
    "Software Engineer",
    "Frontend Developer",
    "AI/ML Enthusiast",
    "React Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    } else {

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;
        speed = 1500;

    } else if (deleting && charIndex === -1) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;

    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/*==========================================
        NAVBAR SCROLL EFFECT
==========================================*/

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(15,23,42,.95)";
        navbar.style.padding = "12px 0";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        navbar.style.background = "rgba(15,23,42,.75)";
        navbar.style.padding = "18px 0";
        navbar.style.boxShadow = "none";

    }

});

/*==========================================
        ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==========================================
        REVEAL ANIMATION
==========================================*/

const reveals = document.querySelectorAll(
    ".about, .skills, .projects, .contact, .achievements"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: .15

});

reveals.forEach(section => {

    section.classList.add("reveal");

    observer.observe(section);

});

/*==========================================
        COUNTER ANIMATION
==========================================*/

const counters = document.querySelectorAll(
    ".stat-card h2, .achievement-card h2"
);

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const text = counter.innerText;

            const number = parseInt(text);

            if (isNaN(number)) return;

            let count = 0;

            const increment = Math.ceil(number / 60);

            const update = () => {

                count += increment;

                if (count >= number) {

                    counter.innerText = text;

                } else {

                    counter.innerText = count + (text.includes("+") ? "+" : "");

                    requestAnimationFrame(update);

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==========================================
        CONTACT FORM
==========================================*/

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you! Your message has been recorded. Connect with me via email or LinkedIn.");

        form.reset();

    });

}

/*==========================================
        HERO CARD TILT
==========================================*/

const card = document.querySelector(".code-card");

if (card) {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height / 2) / 25;
        const rotateY = (rect.width / 2 - x) / 25;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.02)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) scale(1)";

    });

}

/*==========================================
        CURRENT YEAR
==========================================*/

const year = document.querySelector(".current-year");

if (year) {

    year.textContent = new Date().getFullYear();

}