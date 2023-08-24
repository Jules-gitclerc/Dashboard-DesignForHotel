const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('myLineChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['15 Nov', '16 Nov', '17 Nov', '18 Nov', '19 Nov', '20 Nov'],
            datasets: [{
                backgroundColor: '#8A3BD6',
                borderColor: '#8A3BD6',
                data: [10, 19, 13, 22, 17, 21, 18],
                tension: 0.4,
                fill: false,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        max: 40,
                        stepSize: 20,
                        padding: 20,
                    },
                    grid: {
                        display: true,
                        drawBorder: false,
                    },
                    border: {
                        display: false,
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});

