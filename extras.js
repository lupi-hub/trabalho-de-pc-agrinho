/* =========================
   TAMANHO DA FONTE
========================= */

let tamanhoFonte = 100;

const aumentar =
document.getElementById("aumentarFonte");

const diminuir =
document.getElementById("diminuirFonte");

if(aumentar){

    aumentar.addEventListener("click",()=>{

        tamanhoFonte += 10;

        document.body.style.fontSize =
        tamanhoFonte + "%";

    });

}

if(diminuir){

    diminuir.addEventListener("click",()=>{

        tamanhoFonte -= 10;

        document.body.style.fontSize =
        tamanhoFonte + "%";

    });

}

/* =========================
   ALTO CONTRASTE
========================= */

const contrasteBtn =
document.getElementById("contrasteBtn");

if(contrasteBtn){

    contrasteBtn.addEventListener("click",()=>{

        document.body.classList.toggle("modo-escuro");

        if(document.body.classList.contains("modo-escuro")){

            contrasteBtn.textContent = "☀️";

        }else{

            contrasteBtn.textContent = "🌙";

        }

    });

}

/* =========================
   AMPLIAR IMAGENS
========================= */

const modal = document.createElement("div");

modal.classList.add("image-modal");

modal.innerHTML = "<img>";

document.body.appendChild(modal);

const modalImg = modal.querySelector("img");

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        modalImg.src = img.src;

        modal.classList.add("active");

    });

});

modal.addEventListener("click",()=>{

    modal.classList.remove("active");

});