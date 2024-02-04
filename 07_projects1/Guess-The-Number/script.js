// console.log(parseInt(Math.random()*100+1));
let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

const submitbtn = document.querySelector("#submit");
const userInput = document.querySelector("#guessfield");
const guesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrhigh");
const startOver = document.querySelector(".resultpara");

const p = document.createElement("p");

let prevGuess = [];
let numguess = 1;
let playGame = true;

if (playGame) {
  submitbtn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a valid number");
    userInput.value = "";
  } else if (guess < 1) {
    alert("Please Enter more than 1 number");
    userInput.value = "";
  } else if (guess > 100) {
    alert("Please Enter less than 100 number");
    userInput.value = "";
  } else {
    prevGuess.push(guess);
    if (numguess === 11) {
      guessDisplay(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    } else {
      guessDisplay(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOOO high`);
  }
}
function guessDisplay(guess) {
  userInput.value = "";
  guesses.innerHTML += `${guess} `;
  remaining.innerHTML = `${11 - numguess}`;
  numguess++;
}
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numguess = 1
        guesses.innerHTML = ''
        remaining.innerHTML = `${11-numguess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML =`<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
