var secretNumber, guessCount, maxGuess, guess, newGuess;
function startGame() {
  //Randomly generate number and hold it outside of any functions so it doesn't change
  secretNumber = Math.floor(Math.random() * 10 + 1);
  //Set the counter outside of any function that may reset it
  guessCount = 0;
  //Max guesses allowed
  maxGuess = 6;
  guessNumber();
}

//Function we can return to if the value is wrong.  It accepts a string.
function guessNumber(msg) {
  //Add one to guess count
  guessCount++;
  //If the message is empty, we'll set a default message
  if (!msg) {
    msg = "Guess a number between 1 and 10.";
  }
  //Pop up the guess box
  guess = prompt(msg);
  //Ensure guess is a an integer (good job)
  newGuess = parseInt(guess);
  if (guessCount + 1 <= maxGuess) {
    if (newGuess === secretNumber) {
      //They got it, tell them and don't loop back into this function
      document.getElementById("demo").innerHTML =
        "Correct you guessed " + guessCount + " times";
    } else if (newGuess < secretNumber) {
      //Bad guess, too low, prompt to try again
      guessNumber("Sorry that number is too small. Try again.");
    } else if (newGuess > secretNumber) {
      //Bad guess, too high, prompt to try again
      guessNumber("Sorry that number is too big. Try again.");
    }
  } else {
    if (confirm("Too many tries!  The correct number was " + secretNumber + "\nTry again?")) {
      startGame();
    }
  }
}
