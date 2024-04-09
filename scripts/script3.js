function guessNumber(){
    //generate a random number
    let randomNumber=(Math.floor(Math.random()*10)+1);
    // get the number from the user
    let userGuess= Number(prompt("Guess the number between 1-10"))
    //check if guest number is correct
    let results = document.getElementById("results")
    if(userGuess == randomNumber){
        results.innerHTML="Congratulations! You guessed the number.";
    }else{
        results.innerHTML="Sorry, that's not correct. The number was " + randomNumber
    }
}

function getDriverLicense(){
    let userAge= Number(prompt("Enter your age"));
    if(userAge >= 18){
        console.log("Congratulations! You can get your driving license.");
    }else{
        console.log("Sorry, you are too young to get a driving license.");
    }
}

function login(){
    let usernameDB="student@sdgku.edu";
    let userpassDB="Test1234";

    let userName = prompt("Enter username");
    let userPass = prompt("Enter your password")
    if(userName==usernameDB && userPass==userpassDB){
        console.log("Welcome to the system!: " + userName);
    }else{
        console.log("Invalid credentials");
    }
}

// Exercise: Guess the Number Game

// 1. Generate a random number between 1 and 10 (you can use Math.random() and Math.floor()).
// 2. Ask the user to guess the number. (prompt)
// 3. Use an if-else statement to check if the user's guess is correct.
// 4. If the guess is correct, print "Congratulations! You guessed the number."
// 5. If the guess is incorrect, print "Sorry, that's not correct. The number was [generated number]".