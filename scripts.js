var generateNumber = numberGenerator();
var guess = document.getElementById('guess');
var clear = document.getElementById('clear');
var reset = document.getElementById('reset');
var input = document.getElementById('input');
var feedback = document.getElementById('feedback');
var header = document.getElementById('results-header');
var guessedNumber = document.getElementById('guessed-number');


console.log(generateNumber);

guess.addEventListener('click', function() {
  checkGuess();
  clearFields();
  reset.disabled = false;
});

clear.addEventListener('click', function() {
  clearFields();
});

reset.addEventListener('click', function() {
  resetGame();
});

function numberGenerator() {
  return Math.floor(Math.random() * 100) + 1;
}

function resetGame() {
  generateNumber = numberGenerator();
  clearedOut();
  clear.disabled = true;
  reset.disabled = true;
  results.style.backgroundColor = "";
  return console.log(generateNumber);
}

input.addEventListener("keyup", function (){
  if (input.value === ""){
     noButtons();
  } else {
    helloButtons();
  }
});

function clearFields() {
  input.value = "";
  noButtons();
  return console.log('You the bomb.');
}

function checkGuess() {
  var playerInput = parseInt(input.value);
  console.log(playerInput + "!");
  if (isNaN(playerInput)) {
    breakTheRules();
    return feedback.innerText = "You have not guessed a number.";
  }
  if (playerInput > 100) {
    breakTheRules();
    return feedback.innerText = "Please guess within the range 1 - 100.";
  }
  if (playerInput < 1) {
    breakTheRules();
    return feedback.innerText = "Please guess within the range 1 - 100.";
  }
  if (playerInput > generateNumber) {
     revealResults();
     return feedback.innerText = "Guess lower.";
  } else if (playerInput < generateNumber) {
      revealResults();
      return feedback.innerText = "Guess higher.";
  } else {
      revealResults();
      results.style.backgroundColor = "green";
      feedback.innerText = "Great work! Click Reset to play again.";
  }
}

function revealResults() {
  header.className = "";
  guessedNumber.className = "";
  feedback.className = "";
  guessedNumber.innerText = input.value;
}

function breakTheRules() {
  feedback.className = "";
  header.className = "hidden";
  guessedNumber.className = "hidden";
}

function clearedOut() {
  input.value = "";
  header.className = "hidden";
  guessedNumber.className = "hidden";
  feedback.className = "hidden";
  guessedNumber.innerText = "";
  feedback.innerText = "";
}

function noButtons() {
  clear.disabled = true;
  reset.disabled = true;
  guess.disabled = true;
}

function helloButtons() {
  clear.disabled = false;
  reset.disabled = false;
  guess.disabled = false;
}
