function generateRandomNum() {
  return Math.floor(Math.random() * 100 + 1);
}

let randomNumber = generateRandomNum();
console.log(randomNumber);

let tries = 0;

function guessNumber() {
  tries++;
  console.log(tries);
  if (tries === 7) {
    document.querySelector(
      ".final-output"
    ).innerHTML = `You Lose, the number was ${randomNumber}`;
    return;
  }

  let guess = document.querySelector(".inputs-Values").value;
  if (guess > 100 || guess < 0 || guess === "") {
    document.querySelector(".final-output").innerHTML =
      "Please enter a number between 1 and 100";
  }

  document.querySelector(
    ".Tries-output"
  ).innerHTML = `Number of tries: ${tries}`;

  if (guess > randomNumber) {
    document.querySelector(".final-output").innerHTML =
      "Number is too high, try again";
  } else if (guess < randomNumber) {
    document.querySelector(".final-output").innerHTML =
      "Number is too low, try again";
  } else {
    document.querySelector(
      ".final-output"
    ).innerHTML = `Guess is correct. You win!`;
  }
}

function newGame() {
  tries = 0;
  randomNumber = generateRandomNum();
  console.log(tries);
  document.querySelector(".Tries-output").innerHTML = "";
  document.querySelector(".inputs-Values").value = "";
  document.querySelector(".final-output").innerHTML =
    "Guess a number between 1 and 100";
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
