`use strict`;

let result = null;
let number, numbersArray, operations, lastEntryOperator, resultState;

const btns = document.querySelectorAll(`.btn`);
const btnsOp = document.querySelectorAll(`.btn-op`);
const inputData = document.querySelector(`.inputData`);
const outputData = document.querySelector(`.outputData`);
const btnClear = document.querySelector(`.btn-C`);

// Function #1 - Initialization or Reset
const init = function () {
  number = ``;
  numbersArray = [1];
  operations = [`*`];
  lastEntryOperator = false;
  resultState = false;
  inputData.textContent = ``;
  outputData.textContent = ``;
  btnClear.style.backgroundColor = null;
};
// Function #2 - Display Input and Output
const display = function (input, result) {
  inputData.textContent += input;
  outputData.textContent = result;
};
// Function #3 - Calculation
const calculate = function (numbers, operations) {
  result = numbers[0];
  for (let i = 0; i < numbers.length - 1; i++) {
    if (operations[i] === `+`) {
      result += numbersArray[i + 1];
    } else if (operations[i] === `-`) {
      result -= numbersArray[i + 1];
    } else if (operations[i] === `*`) {
      result *= numbersArray[i + 1];
    } else if (operations[i] === `/`) {
      result /= numbersArray[i + 1];
    }
  }
  display(``, result);
  resultState = true;
};

init();

// Event for Clicking Numbers and Dot Button
btns.forEach(function (btn) {
  btn.addEventListener(`click`, function () {
    if (resultState === false) {
      number += btn.value;
      display(btn.value);
      lastEntryOperator = false;
    } else {
      alert(`Please Click Clear Button!`);
      btnClear.style.backgroundColor = `red`;
    }
  });
});

// Event for Clicking Operator and Clear Button
btnsOp.forEach(function (btnOp) {
  btnOp.addEventListener(`click`, function () {
    // if +,-,*,/ is clicked
    if (btnOp.value !== `=` && btnOp.value !== `C` && resultState === false) {
      if (lastEntryOperator === false) {
        numbersArray.push(Number(number));
        number = ``;
        operations.push(btnOp.value);
        lastEntryOperator = true;
        display(btnOp.value);
      } else alert(`Please enter number not operator...`);
    }
    // else if = is clicked
    else if (btnOp.value === `=` && resultState === false) {
      if (lastEntryOperator === false) {
        numbersArray.push(Number(number));
        number = ``;
      }
      calculate(numbersArray, operations);
    }
    // else if C is clicked
    else if (btnOp.value === `C`) {
      init();
    }
    // else
    else {
      alert(`Please Click Clear Button!`);
      btnClear.style.backgroundColor = `red`;
    }
  });
});
