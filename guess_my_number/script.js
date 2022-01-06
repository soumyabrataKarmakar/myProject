'use strict';

//Variable declaration for secret number, score and highscore
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Function #1 - To display the Message
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

//Function #2 - To display the Score
const displayScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};

//Function #3 - To display the Number
const displayNumber = function (number) {
  document.querySelector(`.number`).textContent = number;
};

//Function #4 - Change the background-color of body
const changeBodyBackgroundColor = function (color) {
  document.querySelector(`body`).style.backgroundColor = color;
};

//Function #5 - Change the width of Secret Number Box
const changeWidthOfSecretNumberBox = function (width) {
  document.querySelector(`.number`).style.width = width;
};

// Function #6 - Display High Score
const displayHighScore = function (highScore) {
  document.querySelector(`.highscore`).textContent = highScore;
};

// Event for clicking Check button
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  ////When there is no input
  if (!guess) {
    displayMessage(`No Number!`);
  }
  ////When player wins
  else if (guess === secretNumber) {
    // Displaying win message
    displayMessage(`Correct Number!`);
    // Visible the secret number
    displayNumber(secretNumber);
    //Changing the background-color to green in case of win
    changeBodyBackgroundColor(`#60b347`);
    //Increasing the width of secret number box in case of win
    changeWidthOfSecretNumberBox(`30rem`);

    //Updation of Highscore if higher than before
    if (score > highScore) highScore = score;
    //Diplaying High Score
    displayHighScore(highScore);
  }
  ////When guess is wrong
  else if (guess !== secretNumber) {
    // Checking if score is not 0
    if (score > 1) {
      // Displaying hint message
      displayMessage(guess > secretNumber ? `Too High!` : `Too Low!`);
      // Score decreases by 1 for each wrong guess
      score--;
      // Updating score
      displayScore(score);
    } else {
      // Display message if loose
      displayMessage(`You Lost the Game!`);
      // Updating score
      displayScore(0);
    }
  }
});

//Event for clicking Again Button
document.querySelector(`.again`).addEventListener(`click`, function () {
  // Reseting score and random number
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Reseting message, score and secret number box
  displayMessage(`Start guessing...`);
  displayScore(score);
  displayNumber(`?`);
  // Reseting the guess input box
  document.querySelector(`.guess`).value = ``;
  // Reseting color of window and width of number box
  changeBodyBackgroundColor(`#222`);
  changeWidthOfSecretNumberBox(`15rem`);
});

//   //When guess is too high - REFACTORED This Code
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector(`.message`).textContent = `Too High!`;
//     score--;
//     document.querySelector(`.score`).textContent = score;
//   } else {
//     document.querySelector(`.message`).textContent = `You Lost the Game!`;
//     document.querySelector(`.score`).textContent = 0;
//   }

//   //When guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector(`.message`).textContent = `Too Low!`;
//     score--;
//     document.querySelector(`.score`).textContent = score;
//   } else {
//     document.querySelector(`.message`).textContent = `You Lost the Game!`;
//     document.querySelector(`.score`).textContent = 0;
//   }
// }
