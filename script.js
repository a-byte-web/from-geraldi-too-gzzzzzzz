/* =========================
   OPEN LETTER
========================= */

function openLetter() {

    const opening = document.getElementById("opening");
    const main = document.getElementById("mainContent");
    const music = document.getElementById("music");

    opening.style.transition = "1.2s ease";

    opening.style.transform = "translateY(-100%)";
    opening.style.opacity = "0";

    setTimeout(() => {

        main.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);


    /* PLAY MUSIC */

    music.play()
        .then(() => {

            document.getElementById("musicIcon").textContent = "🔊";

        })
        .catch(() => {

            console.log("Browser meminta interaksi pengguna.");

        });


    createManyHearts();

}

function scrollToGallery() {

    document
        .getElementById("gallery")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   MUSIC
========================= */

let musicPlaying = false;


function toggleMusic() {

    const music = document.getElementById("music");

    const icon = document.getElementById("musicIcon");


    if (music.paused) {

        music.play();

        icon.textContent = "🔊";

        musicPlaying = true;

    } else {

        music.pause();

        icon.textContent = "🔇";

        musicPlaying = false;

    }

}


/* =========================
   NAVIGATION
========================= */

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


function scrollToLetter() {

    document.querySelector(".letter-section")
        .scrollIntoView({

            behavior: "smooth"

        });

}


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: .15
    }

);


document.querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* =========================
   FALLING FLOWERS
========================= */

const particles = [
    "🌸",
    "🌷",
    "🌹",
    "🌺",
    "💕",
    "❤️",
    "✨",
    "♡"
];


function createParticle() {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.textContent =
        particles[
            Math.floor(
                Math.random() *
                particles.length
            )
        ];


    particle.style.left =
        Math.random() * 100 + "vw";


    particle.style.fontSize =
        12 + Math.random() * 20 + "px";


    particle.style.animationDuration =
        5 + Math.random() * 8 + "s";


    particle.style.opacity =
        .4 + Math.random() * .6;


    document
        .getElementById("particles")
        .appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 14000);

}


setInterval(createParticle, 700);


/* =========================
   CLICK LOVE
========================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.closest(".bottom-nav") ||
            event.target.closest(".open-btn")
        ) {
            return;
        }


        createClickHeart(
            event.clientX,
            event.clientY
        );

    }
);


function createClickHeart(x, y) {

    const heart =
        document.createElement("div");

    heart.className = "click-heart";

    heart.textContent =
        Math.random() > .5
        ? "❤️"
        : "💕";


    heart.style.left = x + "px";

    heart.style.top = y + "px";


    heart.style.setProperty(
        "--x",
        (Math.random() * 120 - 60) + "px"
    );


    heart.style.setProperty(
        "--y",
        (-80 - Math.random() * 80) + "px"
    );


    document
        .getElementById("love-container")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 1000);

}


/* =========================
   MANY HEARTS
========================= */

function createManyHearts() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        setTimeout(() => {

            const x =
                window.innerWidth / 2 +
                (Math.random() * 300 - 150);

            const y =
                window.innerHeight / 2 +
                (Math.random() * 200 - 100);


            createClickHeart(x, y);

        }, i * 60);

    }

}


/* =========================
   PARALLAX
========================= */

window.addEventListener(
    "scroll",
    () => {

        const flowers =
            document.querySelectorAll(
                ".flower, .rose"
            );


        flowers.forEach((flower, index) => {

            const speed =
                index % 2 === 0
                ? 0.08
                : -0.05;


            flower.style.transform =
                `translateY(${window.scrollY * speed}px)`;

        });

    }
);


/* =========================
   RANDOM HEART BURST
========================= */

setInterval(() => {

    if (
        window.scrollY > 200
    ) {

        if (
            Math.random() > .7
        ) {

            createParticle();

        }

    }

}, 2000);


/* =========================
   PREVENT MUSIC ERROR
========================= */

const music =
    document.getElementById("music");


music.addEventListener(
    "error",
    () => {

        console.log(
            "Tambahkan file music.mp3 ke folder project."
        );

    }
);