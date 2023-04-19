// Hämta canvas-elementet från HTML-koden
var ctx = document.getElementById('myChart').getContext('2d');

// Skapa scatterplot
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatterplot',
            data: [
                { x: 6.016, y: 0.655, label: 'Portugal' },
                { x: 5.967, y: 0.555, label: 'Argentina' },
                { x: 5.948, y: 0.249, label: 'Greece' },
                { x: 5.935, y: 0, label: 'South Korea' }
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].label || '';
                    return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
                }
            }
        }
    }
});
