let userInput = document.querySelector("#guessField");
let submitBtn = document.querySelector("#subt");
let prevGuess = document.querySelector(".guesses");
let tryRemain = document.querySelector(".lastResult");
let lowOrHigh = document.querySelector(".lowOrHi");
let result = document.querySelector(".result");
let resetBtn = document.querySelector("#resetBtn");

let playGame = true;
let randomNum = Math.floor(Math.random() * 100 + 1);
let prev = [];
let maxGuesses = 10;
tryRemain.innerHTML = maxGuesses;

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  let guess = parseInt(userInput.value);
  let remain = parseInt(tryRemain.innerHTML);
  if (playGame) {
    if (remain == 0) {
      endGame(`You Loose. the number was ${randomNum}`);
    } else {
      if (validateGuess(guess)) {
        checkGuess(guess);
      }
    }
  }
});

resetBtn.addEventListener("click", resetGame);

function validateGuess(num) {
  if (isNaN(num)) {
    alert("Please enter valid number");
  } else if (num < 1) {
    alert("Please enter number which is greater than 0.");
  } else if (num > 100) {
    alert("Please enter number which is smaller than 100.");
  } else {
    return true;
  }
  return false;
}

function checkGuess(num) {
  if (num == randomNum) {
    endGame("You passed it right");
  } else {
    updateGameState(num);
  }
}

function updateGameState(num) {
  let remain = parseInt(tryRemain.innerHTML);
  tryRemain.innerHTML = --remain;
  prev.push(num);
  prevGuess.innerHTML = prev.join(", ");
  lowOrHigh.style.display = "block";
  if (num < randomNum) {
    lowOrHigh.innerHTML = "Your entered number is too low.";
  } else {
    lowOrHigh.innerHTML = "Your entered number is too high.";
  }

  if (remain === 0) {
    endGame(`You Lose. The number was ${randomNum}`);
  }
}

function endGame(message) {
  result.innerHTML = message;
  result.style.display = "block";
  lowOrHigh.style.display = "none";
  submitBtn.disabled = true;
  resetBtn.style.display = "block";
  playGame = false;
}

function resetGame() {
  randomNum = Math.floor(Math.random() * 100 + 1);
  prev = [];
  tryRemain.innerHTML = maxGuesses;
  prevGuess.innerHTML = "";
  lowOrHigh.style.display = "none";
  resetBtn.style.display = "none";
  submitBtn.style.backgroundColor = "#212121";
  submitBtn.disabled = false;
  userInput.value = "";
  resetBtn.style.display = "none";
  playGame = true;
}
