function getTemp() {

var temperature= Number (prompt("Enter temperature in celsius"))
var fahrenheit= ((temperature * 9/5) + 32)
var results = document.getElementById("display")

results.innerHTML+=`
<h2>Fahrenheit: ${fahrenheit}</h2>
`
}