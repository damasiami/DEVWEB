const ctx = document.getElementById('myChart').getContext('2d');

const labels = [];
const dataValues = [];

const myChart = new Chart(ctx, {
    type: 'bar', // Você pode mudar para 'line' para um gráfico de linhas
    data: {
        labels: labels,
        datasets: [{
            label: 'Valores',
            data: dataValues,
            backgroundColor: 'rgba(40, 167, 69, 0.6)', // Cor verde
            borderColor: 'rgba(40, 167, 69, 1)',
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#dee2e6'
                }
            },
            x: {
                grid: {
                    color: '#dee2e6'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#343a40' // Cor do texto da legenda
                }
            }
        }
    }
});

document.getElementById('add-data-btn').addEventListener('click', () => {
    const labelInput = document.getElementById('label-input').value;
    const valueInput = document.getElementById('value-input').value;

    if (labelInput && valueInput) {
        labels.push(labelInput);
        dataValues.push(Number(valueInput));

        myChart.update(); // Atualiza o gráfico
        document.getElementById('label-input').value = ''; // Limpa o campo de entrada
        document.getElementById('value-input').value = ''; // Limpa o campo de entrada
    }
});
