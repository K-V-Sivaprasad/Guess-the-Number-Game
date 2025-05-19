let gameResult = document.getElementById("result");
let userInput = document.getElementById("input");
let randomNumber = Math.ceil(Math.random() * 100);
function checkGuess() {
  let guessedNumber = parseInt(input.value);
  if (guessedNumber > randomNumber) {
    gameResult.textContent = "Too High! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
  }
  else if (guessedNumber < randomNumber) {
    gameResult.textContent = "Too Low! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
  }
  else if (guessedNumber === randomNumber) {
    gameResult.textContent = "Congratulations! You got it right.";
    gameResult.style.backgroundColor = "green";
  }
  else {
    gameResult.textContent = "Please provide a valid input.";
    gameResult.style.backgroundColor = "#1e217c";
  }
  
}