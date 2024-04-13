function convertTemperature() {
    let temperature = Number(prompt("Enter temperature:"));
    let option = prompt("Enter 'c' to convert Celsius to Fahrenheit, or 'f' to convert Fahrenheit to Celsius:");
    let result;
    if (option.toUpperCase() == 'C') {
        result = (temperature * 9 / 5) + 32;
        document.getElementById("display").innerHTML = `<h2>Fahrenheit: ${result}</h2>`;
        //convert to F
    } else if (option.toUpperCase() == 'F') {
        result = (temperature - 32) * 5 / 9;
        document.getElementById("display").innerHTML = `<h2>Celsius: ${result}</h2>`;
        //convert to C
    } else {
        document.getElementById("display").innerHTML = "<h2>Invalid option. Please enter 'c' or 'f'.</h2>";
    }
}