console.log("Calculator");
function calculate(){//begining of function

//var userName= prompt("Enter your username");


var number1= Number (prompt("Enter the first number:"));// Number() convert into number
var number2= Number (prompt("Enter the second number:"));
var option= prompt("Enter the option: 1) Sum, 2) Sub");

//console.log("userName");
//console.log(userName);
if(option == 1){
console.log(number1+number2);//math operation
}
if(option == 2){
    console.log("Subtraction results")
    console.log(number1-number2);
}
}//end of function