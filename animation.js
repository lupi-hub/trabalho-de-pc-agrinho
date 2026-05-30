/* =========================
   PARALLAX HERO
========================= */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if(!hero) return;

    hero.style.backgroundPositionY =
        `${window.scrollY * 0.4}px`;

});

/* =========================
   ENTRADA SEQUENCIAL
========================= */

const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.transitionDelay =
        `${index * 0.12}s`;

});

/* =========================
   TÍTULOS SURGINDO
========================= */

const titulos =
document.querySelectorAll("h2");

const tituloObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate(

                [
                    {
                        opacity:0,
                        transform:"translateY(40px)"
                    },

                    {
                        opacity:1,
                        transform:"translateY(0)"
                    }

                ],

                {
                    duration:800,
                    fill:"forwards"
                }

            );

        }

    });

});

titulos.forEach(titulo=>{

    tituloObserver.observe(titulo);

});