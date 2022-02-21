var secret = Math.floor(Math.random() * 10) + 1;

//Event Listener
var startButton = document.getElementById("myBtn");
startButton.onclick = myGuess;

//prompt guess function
function myGuess(){
    var answer = prompt("Please guess a number between 1 and 10.");
    answer = Number(answer);
    checkAnswer(answer);
}
//check answer function
function checkAnswer(guess){
    if(guess === secret){
        alert("Correct! Your guess '" + guess + "' is right.");
        document.getElementById("output").innerHTML = "Congratulations! You won!";
    }else if(guess < secret){
        alert("Incorrect! Your guess is too low.");
        myGuess();
    }else if(guess > secret){
        alert("Incorrect! Your guess is too high.");
        myGuess();
    }else{
        alert("Invalid input!");
        myGuess();
    }
}