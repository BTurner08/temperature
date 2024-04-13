//for(let i=0;i<=5;i++){
    //console.log("Loop line " + i)
//}

//for(let i=10;i<=100;i++){
    //console.log("Loop line " + i)
//}
let number =prompt("Enter the number")
multiTable(number);
function multiTable(num){
    document.write(`Multiplication table x ${num}`);
    for(let i=1;i<=10;i++){
        document.write(`<p> ${i} x ${num} = ${i*num} </p>`);
    }
}