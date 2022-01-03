`use strict`;

// Selectiing Elements
const cellClicked = document.querySelectorAll(`.cell`);
const gameStatus = document.querySelector(`.game--status`);
const body = document.body;
const playerX = `X`;
const playerO = `O`;
let gameStatePlayerX, gameStatePlayerO, activePlayer, pauseState;
let score = [0, 0];
const winningPossibilities = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

// Function #1 - Initiate / Reset the game
const init = function () {
  gameStatePlayerX = [];
  gameStatePlayerO = [];
  activePlayer = 0;
  pauseState = 0;
  gameStatus.textContent = ``;
  body.classList.remove(`winner--x`);
  body.classList.remove(`winner--o`);
  for (let i = 0; i < cellClicked.length; i++) {
    cellClicked[i].textContent = "";
  }
};

init();

// Function #2 - Check winning posibilities
const checkWinner = function (gameState) {
  for (let i = 0; i < winningPossibilities.length; i++) {
    let matched = 0;
    for (let j = 0; j < winningPossibilities[i].length; j++) {
      for (let m = 0; m < gameState.length; m++) {
        if (gameState[m] === winningPossibilities[i][j]) matched++;
      }
    }
    if (matched === winningPossibilities[i].length) {
      gameStatus.textContent = `Player ${
        activePlayer === 0 ? playerX : playerO
      } has won the Game`;
      body.classList.add(activePlayer === 0 ? `winner--x` : `winner--o`);
      activePlayer === 0 ? score[0]++ : score[1]++;
      pauseState = 1;
      showScore();
    }
  }
};

// Function #3 - Check if it is a tie
const isTie = function () {
  let cellFull = 0;
  for (let i = 0; i < cellClicked.length; i++) {
    if (cellClicked[i].innerHTML !== ``) {
      cellFull++;
    }
  }
  if (cellFull === cellClicked.length) {
    gameStatus.textContent = `It is a Tie!`;
    pauseState = 1;
  }
};

// Function #4 - Show Score
const showScore = function () {
  document.querySelector(`.score--x`).textContent = score[0];
  document.querySelector(`.score--o`).textContent = score[1];
};

// Event for clicking on a cell
for (let i = 0; i < cellClicked.length; i++) {
  cellClicked[i].addEventListener(`click`, function () {
    if (pauseState === 0 && cellClicked[i].innerHTML === "") {
      cellClicked[i].textContent = activePlayer === 0 ? playerX : playerO;
      activePlayer === 0 ? gameStatePlayerX.push(i) : gameStatePlayerO.push(i);
      checkWinner(activePlayer === 0 ? gameStatePlayerX : gameStatePlayerO);
      isTie();
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    }
  });
}

// Event for clicking Restart Button
document.querySelector(`.game--restart`).addEventListener(`click`, init);
