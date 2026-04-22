document.getElementById("track-resource").addEventListener("click", function () {
    // Get values from the form
    var householdSize = parseInt(document.getElementById("household-size").value);
    var waterConsumption = parseInt(document.getElementById("water-consumption").value);
    var electricityConsumption = parseInt(document.getElementById("electricity-consumption").value);
    var gasConsumption = parseInt(document.getElementById("gas-consumption").value);
    var wasteGeneration = parseInt(document.getElementById("waste-generation").value);

    // Clear the resource list before displaying the new input
    var resourceList = document.getElementById("resource-list");
    resourceList.innerHTML = "";

    // Display the current input in the resource list
    var listItem = document.createElement("li");
    listItem.innerHTML = `<strong>Household Size:</strong> ${householdSize},
                          <strong>Water Consumption:</strong> ${waterConsumption} Liters, 
                          <strong>Electricity Consumption:</strong> ${electricityConsumption} kWh, 
                          <strong>Gas Consumption:</strong> ${gasConsumption} m³,
                          <strong>Waste Generation:</strong> ${wasteGeneration} kg`;
    resourceList.appendChild(listItem);

    // Define impact factors for each input category
    var impactFactors = {
        householdSize: 0.1,
        waterConsumption: 0.25,
        electricityConsumption: 0.25,
        gasConsumption: 0.25,
        wasteGeneration: 0.25
    };

    // Calculate the weighted total score with scaling factor for household size
    var totalScore = (householdSize / 100 * impactFactors.householdSize) +
                     (waterConsumption / householdSize * 100 * impactFactors.waterConsumption) +
                     (electricityConsumption / householdSize * 100 * impactFactors.electricityConsumption) +
                     (gasConsumption / householdSize * 100 * impactFactors.gasConsumption) +
                     (wasteGeneration / householdSize * 100 * impactFactors.wasteGeneration);

    // Calculate the average score
    var averageScore = totalScore / Object.values(impactFactors).reduce((sum, factor) => sum + factor, 0);

    // Display the tracked resources in a list
    var messageContainer = document.getElementById('message-container');
    var improvementTips = document.getElementById('improvement-tips');
    messageContainer.innerHTML = `<p>Your household's environmental impact score is ${averageScore.toFixed(2)}.</p>`;


// Display improvement tips based on the average score
if (averageScore < 5000) {
    improvementTips.innerHTML = `<p>Congratulations! Your environmental impact is very low, indicating sustainable practices. Keep it up!</p>`;
} else if (averageScore >= 5000 && averageScore < 10000) {
    improvementTips.innerHTML = `<p>Your household's environmental impact is moderate. Here are some tips to further reduce your footprint:</p>
                                <ul>
                                    <li><strong>Water Consumption:</strong> Fix leaks and consider water-saving appliances.</li>
                                    <li><strong>Electricity Consumption:</strong> Use energy-efficient appliances and turn off lights when not in use.</li>
                                    <li><strong>Gas Consumption:</strong> Improve home insulation and be mindful of thermostat settings.</li>
                                    <li><strong>Waste Generation:</strong> Practice recycling and reducing single-use items.</li>
                                </ul>
                                <p>Implementing these changes can contribute to a more sustainable lifestyle.</p>`;
} else {
    improvementTips.innerHTML = `<p>Your environmental impact is relatively high. Consider these steps to reduce your footprint:</p>
                                <ul>
                                    <li><strong>Water Consumption:</strong> Fix leaks, use water-saving appliances, and be mindful of daily water usage.</li>
                                    <li><strong>Electricity Consumption:</strong> Transition to energy-efficient appliances, turn off unused electronics, and explore renewable energy sources.</li>
                                    <li><strong>Gas Consumption:</strong> Upgrade to energy-efficient heating, improve home insulation, and optimize thermostat settings.</li>
                                    <li><strong>Waste Generation:</strong> Prioritize recycling, composting, and minimizing single-use plastics in your daily life.</li>
                                </ul>
                                <p>Small changes can make a significant impact on the environment. Your efforts matter!</p>`;
}


    // Update or create a chart (using Chart.js library)
    updateChart([waterConsumption, electricityConsumption, gasConsumption, wasteGeneration]);

    // Update slider values dynamically
    updateSliderValue('water-consumption', 'water-consumption-value');
    updateSliderValue('electricity-consumption', 'electricity-consumption-value');
    updateSliderValue('gas-consumption', 'gas-consumption-value');
    updateSliderValue('waste-generation', 'waste-generation-value');
});

// Add event listeners for slider input changes
document.getElementById("water-consumption").addEventListener("input", function () {
    updateSliderValue('water-consumption', 'water-consumption-value');
});

document.getElementById("electricity-consumption").addEventListener("input", function () {
    updateSliderValue('electricity-consumption', 'electricity-consumption-value');
});

document.getElementById("gas-consumption").addEventListener("input", function () {
    updateSliderValue('gas-consumption', 'gas-consumption-value');
});

document.getElementById("waste-generation").addEventListener("input", function () {
    updateSliderValue('waste-generation', 'waste-generation-value');
});

// Function to update slider values
function updateSliderValue(sliderId, valueId) {
    var slider = document.getElementById(sliderId);
    var valueElement = document.getElementById(valueId);
    var unit = '';

    if (sliderId.includes('water')) {
        unit = ' Liters';
    } else if (sliderId.includes('electricity')) {
        unit = ' kWh';
    } else if (sliderId.includes('gas')) {
        unit = ' m³';
    } else if (sliderId.includes('waste')) {
        unit = ' kg';
    }
    valueElement.textContent = slider.value + unit;
}

// Function to update or create a chart
function updateChart(data) {
    var ctx = document.getElementById('resource-chart').getContext('2d');
    
    // Clear the existing chart (if any)
    if (window.resourceChart) {
        window.resourceChart.destroy();
    }

    // Create a new chart
    window.resourceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Water', 'Electricity', 'Gas', 'Waste'],
            datasets: [{
                label: 'Resource Consumption',
                data: data,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

