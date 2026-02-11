// get the context of the cnavas element we want to select
let ctx = document.getElementById('myChart').getContext('2d');

// Create a new Chart object
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3], // Data points for the chart
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Red
                'rgba(54, 162, 235, 0.2)', // Blue
                'rgba(255, 206, 86, 0.2)', // Yellow
                'rgba(75, 192, 192, 0.2)', // Green
                'rgba(153, 102, 255, 0.2)', // Purple
                'rgba(255, 159, 64, 0.2)' // Orange
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)', // Red
                'rgba(54, 162, 235, 1)', // Blue
                'rgba(255, 206, 86, 1)', // Yellow
                'rgba(75, 192, 192, 1)', // Green
                'rgba(153, 102, 255, 1)', // Purple
                'rgba(255, 159, 64, 1)' // Orange
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});
let lineWidth = 10;
// Code for Line Chart
let lineChart = document.getElementById('lineChart').getContext('2d');

new Chart(lineChart, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [30, 45, 60, 35, 50, 40],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: lineWidth,
            fill: false,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
})

// Pie Chart
let pie = document.getElementById("pieChart").getContext("2d");

new Chart(pie, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets : [{
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2);
                }
            }
        }
    }
})