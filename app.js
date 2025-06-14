document.addEventListener("DOMContentLoaded", () => {
    loadChart();
});

async function loadChart() {
    try {
        let response = await fetch('https://dummyjson.com/c/ed3b-f658-4a65-b3af');
        const data = await response.json();
        let name = data.map(item => item.name)
        let share = data.map(item => item.share)
        const ctx = document.getElementById('companyShareChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: name,
                datasets: [{
                    label: 'Shares',
                    data: share,
                    backgroundColor: ['#f87171', '#60a5fa', '#facc15', '#34d399', '#a78bfa', '#fb923c', '#f472b6', '#38bdf8'],
                    hoverOffset: 10,

                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Company Shares Data'
                    },
                }
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}