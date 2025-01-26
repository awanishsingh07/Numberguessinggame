const submitButton = document.getElementById('submit');
const guessInput = document.getElementById('guess');
const resultText = document.getElementById('result');

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

submitButton.addEventListener('click', function() {
  const userGuess = parseInt(guessInput.value);
  attempts++;

  if (userGuess < randomNumber) {
    resultText.textContent = `Too low! Try again. Attempts: ${attempts}`;
  } else if (userGuess > randomNumber) {
    resultText.textContent = `Too high! Try again. Attempts: ${attempts}`;
  } else {
    resultText.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
  }
});
