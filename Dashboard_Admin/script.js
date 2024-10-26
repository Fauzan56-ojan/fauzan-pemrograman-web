const ctx = document.getElementById('activityChart').getContext('2d');
const activityChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), // Auto-generate 30 days
        datasets: [
            {
                label: 'Postingan',
                data: [3, 2, 1, 5, 3, 4, 1, 0, 2, 1, 3, 2, 1, 5, 3, 4, 2, 1, 0, 2, 1, 3, 2, 1, 5, 3, 4, 2, 1, 0],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.3
            },
            {
                label: 'Komentar',
                data: [5, 10, 15, 8, 12, 17, 9, 10, 11, 20, 15, 10, 17, 9, 10, 11, 18, 15, 20, 14, 9, 8, 19, 16, 18, 11, 19, 20, 15, 17],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
                tension: 0.3
            },
            {
                label: 'Pengunjung',
                data: [120, 150, 130, 110, 140, 120, 160, 170, 150, 180, 140, 150, 160, 190, 140, 150, 160, 170, 160, 140, 180, 190, 170, 200, 180, 160, 190, 170, 180, 200],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    }
                }
            }
        }
    }
});

// toggle.js
const toggleButton = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidden'); // Tambah atau hapus kelas 'hidden'
    mainContent.classList.toggle('expanded'); // Tambah atau hapus kelas 'expanded'
});