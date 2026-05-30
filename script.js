/* =========================
   BOTÃO EXPLORAR
========================= */

const explorarBtn = document.getElementById("explorarBtn");

if (explorarBtn) {

    explorarBtn.addEventListener("click", () => {

        document.querySelector("#sobre").scrollIntoView({
            behavior: "smooth"
        });

    });

}

/* =========================
   NAVBAR DINÂMICA
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.padding = "15px 8%";

    } else {

        navbar.style.background = "rgba(0,0,0,0.75)";
        navbar.style.padding = "20px 8%";

    }

});

/* =========================
   REVELAR ELEMENTOS
========================= */

const revealElements = document.querySelectorAll(
    ".card, .timeline-item, .advantages, .disadvantages, .stat-box"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if (position < screenPosition) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =========================
   CONTADORES
========================= */

function animateCounter(id, target) {

    const element = document.getElementById(id);

    if (!element) return;

    let count = 0;

    const speed = Math.max(10, Math.floor(1500 / target));

    const interval = setInterval(() => {

        count++;

        element.innerText = count;

        if (count >= target) {

            clearInterval(interval);

        }

    }, speed);

}

animateCounter("contador1", 4);
animateCounter("contador2", 6);
animateCounter("contador3", 8);

/* =========================
   OBSERVER DAS SEÇÕES
========================= */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});

/* =========================
   GRÁFICO 1
   BIOCOMBUSTÍVEIS
========================= */

const grafico1 = document.getElementById("graficoPrincipal");

if (grafico1) {

    new Chart(grafico1, {

        type: "bar",

        data: {

            labels: [
                "Etanol",
                "Biodiesel",
                "Biogás",
                "Biometano"
            ],

            datasets: [{
                label: "Principais Biocombustíveis",
                data: [90, 80, 65, 55],
                borderWidth: 2
            }]

        },

        options: {

            responsive: true,

            plugins: {

                title: {

                    display: true,
                    text: "Principais Biocombustíveis"

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}

/* =========================
   GRÁFICO 2
   BENEFÍCIOS
========================= */

const grafico2 = document.getElementById("graficoAmbiental");

if (grafico2) {

    new Chart(grafico2, {

        type: "doughnut",

        data: {

            labels: [
                "Redução de Poluentes",
                "Energia Renovável",
                "Reaproveitamento",
                "Menor Dependência"
            ],

            datasets: [{

                data: [35, 30, 20, 15]

            }]

        },

        options: {

            responsive: true,

            plugins: {

                title: {

                    display: true,
                    text: "Benefícios da Agroenergia"

                }

            }

        }

    });

}

/* =========================
   GRÁFICO 3
   BRASIL
========================= */

const grafico3 = document.getElementById("graficoBrasil");

if (grafico3) {

    new Chart(grafico3, {

        type: "line",

        data: {

            labels: [
                "1975",
                "1990",
                "2004",
                "2017",
                "Hoje"
            ],

            datasets: [{

                label: "Expansão da Agroenergia",

                data: [
                    10,
                    25,
                    50,
                    80,
                    100
                ],

                tension: 0.4

            }]

        },

        options: {

            responsive: true,

            plugins: {

                title: {

                    display: true,
                    text: "Evolução da Agroenergia no Brasil"

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}

/* =========================
   CONSOLE
========================= */

console.log(
    "Projeto Agroenergia carregado com sucesso."
);