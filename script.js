const botao = document.getElementById("btnInfo");

botao.addEventListener("click", () => {

    alert(
        "Os biocombustíveis ajudam a reduzir a poluição e são importantes para o futuro sustentável!"
    );

});

const ctx = document.getElementById('grafico');

new Chart(ctx, {
    type: 'bar',

    data: {
        labels: [
            'Etanol',
            'Biodiesel',
            'Biogás',
            'Biometano'
        ],

        datasets: [{
            label: 'Uso no Brasil',
            data: [90, 75, 55, 40],
            borderWidth: 1
        }]
    },

    options: {
        responsive: true,

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});