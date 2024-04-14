function convertTemperatureRange(startValue, endValue, scale) {
    let result;
    let convertedTemperatures = "";

    for (let temperature = startValue; temperature <= endValue; temperature++) {
        if (scale.toUpperCase() === 'C') {
            // Convert Celsius to Fahrenheit
            result = (temperature * 9 / 5) + 32;
            convertedTemperatures += `<p>Celsius: ${temperature}, Fahrenheit: ${result}</p>`;
        } else if (scale.toUpperCase() === 'F') {
            // Convert Fahrenheit to Celsius
            result = (temperature - 32) * 5 / 9;
            convertedTemperatures += `<p>Fahrenheit: ${temperature}, Celsius: ${result}</p>`;
        } else {
            return "Invalid scale. Please enter 'C' or 'F'.";
        }
    }
    return convertedTemperatures;
}

// Prompt the user for inputs
let startTemp = Number(prompt("Enter starting temperature:"));
let endTemp = Number(prompt("Enter ending temperature:"));
let tempScale = prompt("Enter 'C' for Celsius or 'F' for Fahrenheit:"); 
let convertedResults = convertTemperatureRange(startTemp, endTemp, tempScale);
document.getElementById("display").innerHTML = convertedResults;

convertTemperature();