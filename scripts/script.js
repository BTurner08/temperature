console.log("Calculator");
function calculate(){//begining of function

//var userName= prompt("Enter your username");


var number1= Number (prompt("Enter the first number:"));// Number() convert into number
var number2= Number (prompt("Enter the second number:"));
var option= prompt("Enter the option: 1) Addition, 2) Subtraction, 3)Multiply, 4)Divide");

//console.log("userName");
//console.log(userName);
if(option == 1){
console.log("Addition results")
console.log(number1+number2);//math operation
}
if(option == 2){
    console.log("Subtraction results")
    console.log(number1-number2);
}
if(option == 3){
    console.log("Multiplication results")
    console.log(number1*number2);
}
if(option == 4) {
    if(number2 !==0) {
    console.log("Division results")
    console.log(number1/number2);
} else {
    console.log("Error: Division by zero is not allowed.")
}
}
}//end of function