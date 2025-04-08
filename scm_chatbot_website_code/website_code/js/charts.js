// Charts for SCM ChatBot Demo
document.addEventListener('DOMContentLoaded', function() {
    // Initialize chart libraries if needed
    prepareChartContainers();
});

function prepareChartContainers() {
    // Replace chart placeholders with canvas elements
    const chartPlaceholders = document.querySelectorAll('.chart-placeholder');
    chartPlaceholders.forEach(placeholder => {
        const canvas = document.createElement('canvas');
        canvas.id = 'chart-' + Math.random().toString(36).substring(2, 9);
        canvas.style.width = '100%';
        canvas.style.height = '200px';
        placeholder.innerHTML = '';
        placeholder.appendChild(canvas);
    });
}

// Function to create inventory offenders chart
function createInventoryOffendersChart(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const canvas = container.querySelector('canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Data for inventory offenders
    const data = {
        labels: ['Widget XL-5000', 'Connector A-200', 'Power Supply 24V', 'Control Module B', 'Sensor Array 12X'],
        datasets: [
            {
                label: 'Days on Hand',
                data: [187, 145, 45, 98, 76],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1
            },
            {
                label: 'Inventory Turns',
                data: [1.9, 2.5, 8.1, 3.7, 4.8],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1
            },
            {
                label: 'Forecast Error (%)',
                data: [42, 28, 35, 19, 15],
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                borderColor: 'rgb(255, 206, 86)',
                borderWidth: 1
            }
        ]
    };
    
    // Chart configuration
    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Top 5 Inventory Offenders'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    
    // Create chart
    new Chart(ctx, config);
}

// Function to create forecast accuracy chart
function createForecastAccuracyChart(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const canvas = container.querySelector('canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Data for forecast accuracy trend
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Electronics',
                data: [81.2, 82.5, 83.1, 84.2, 83.7, 85.1, 84.8, 85.6, 86.2, 86.9, 87.1, 87.3],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                tension: 0.3,
                fill: true
            },
            {
                label: 'Mechanical',
                data: [78.3, 77.9, 76.8, 77.2, 78.1, 78.5, 79.0, 78.7, 79.2, 79.5, 79.7, 79.8],
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.1)',
                tension: 0.3,
                fill: true
            },
            {
                label: 'Consumables',
                data: [85.6, 86.2, 87.1, 87.5, 88.2, 88.7, 89.1, 89.5, 90.1, 90.5, 90.8, 91.2],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                tension: 0.3,
                fill: true
            },
            {
                label: 'Raw Materials',
                data: [80.1, 80.5, 81.2, 81.7, 82.3, 82.8, 83.1, 83.5, 83.9, 84.2, 84.4, 84.5],
                borderColor: 'rgb(255, 159, 64)',
                backgroundColor: 'rgba(255, 159, 64, 0.1)',
                tension: 0.3,
                fill: true
            }
        ]
    };
    
    // Chart configuration
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Forecast Accuracy Trend (Last 12 Months)'
                }
            },
            scales: {
                y: {
                    min: 75,
                    max: 95,
                    title: {
                        display: true,
                        text: 'Accuracy (%)'
                    }
                }
            }
        }
    };
    
    // Create chart
    new Chart(ctx, config);
}

// Function to create project status chart
function createProjectStatusChart(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const canvas = container.querySelector('canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Data for project status
    const data = {
        labels: ['On Track', 'At Risk', 'Delayed', 'Completed'],
        datasets: [{
            label: 'Number of Projects',
            data: [8, 2, 2, 5],
            backgroundColor: [
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)'
            ],
            borderColor: [
                'rgb(75, 192, 192)',
                'rgb(255, 206, 86)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            borderWidth: 1
        }]
    };
    
    // Chart configuration
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Project Status Overview'
                }
            }
        }
    };
    
    // Create chart
    new Chart(ctx, config);
}

// Function to create new product SOP chart
function createNewProductSOPChart(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const canvas = container.querySelector('canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Data for new product forecast comparison
    const data = {
        labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
        datasets: [
            {
                label: 'Similar Product Method',
                data: [120, 250, 380, 450, 520, 580],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                tension: 0.3,
                fill: true
            },
            {
                label: 'Category Average Method',
                data: [100, 210, 320, 390, 440, 490],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                tension: 0.3,
                fill: true
            },
            {
                label: 'Actual Sales (Example)',
                data: [130, 260, 390, 460, 530, 590],
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'transparent',
                borderDash: [5, 5],
                tension: 0.3,
                fill: false
            }
        ]
    };
    
    // Chart configuration
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'New Product Forecast Comparison'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Units'
                    }
                }
            }
        }
    };
    
    // Create chart
    new Chart(ctx, config);
}
