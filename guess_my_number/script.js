'use strict';
/*
console.log(document.querySelector(`.message`).textContent); //Establishing the connection between the console and user interface
document.querySelector(`.message`).textContent = `Correct Number!`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

//Generating secret number between 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//Assigning the score in a variable
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

// Event for clicking Check button
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  ////When there is no input
  if (!guess) {
    // document.querySelector(`.message`).textContent = `No Number!`;
    displayMessage(`No Number!`);
  }
  ////When player wins
  else if (guess === secretNumber) {
    // document.querySelector(`.message`).textContent = `Correct Number!`;
    displayMessage(`Correct Number!`);
    displayNumber(secretNumber);
    //Changing the background-color to green in case of win
    // document.querySelector(`body`).style.backgroundColor = `#60b347`;
    changeBodyBackgroundColor(`#60b347`);
    ////Increasing the width of secret number box in case of win
    // document.querySelector(`.number`).style.width = `30rem`;
    changeWidthOfSecretNumberBox(`30rem`);

    ////Implementing Highscore
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(`.highscore`).textContent = highScore;
  }
  ////When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent =
      //   guess > secretNumber ? `Too High!` : `Too Low!`;
      displayMessage(guess > secretNumber ? `Too High!` : `Too Low!`);
      score--;
      displayScore(score);
    } else {
      // document.querySelector(`.message`).textContent = `You Lost the Game!`;
      displayMessage(`You Lost the Game!`);
      displayScore(0);
    }
  }
});

//Event for clicking Again Button
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(`.message`).textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);
  // document.querySelector(`.score`).textContent = score;
  displayScore(score);
  // document.querySelector(`.number`).textContent = `?`;
  displayNumber(`?`);

  document.querySelector(`.guess`).value = ``;

  // document.querySelector(`body`).style.backgroundColor = `#222`;
  changeBodyBackgroundColor(`#222`);
  // document.querySelector(`.number`).style.width = `15rem`;
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

//////////////////////////////////////////////////////
//Coding Challenge #1

/*Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/
