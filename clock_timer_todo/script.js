`use strict`;

// Elements
const clock = document.querySelector(`.clock`);
const date = document.querySelector(`.date`);
const timer = document.querySelector(`.timer`);
const todoText = document.querySelector(`.todo-text`);
const todoList = document.querySelector(`.todo-list`);

const btnStartTimer = document.querySelector(`.start-timer`);
const btnStopTimer = document.querySelector(`.stop-timer`);
const btnResetTimer = document.querySelector(`.reset-timer`);
const btnAddTodo = document.querySelector(`.add-todo`);
let btnsDeleteTodo = document.querySelectorAll(`.delete-todo`);
const btnClearTodo = document.querySelector(`.clear-todo`);

////////////////////////////////////////////
// // Clock Function
const clockAndDate = function () {
  setInterval(() => {
    const now = new Date();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const minute = `${now.getMinutes()}`.padStart(2, 0);
    const second = `${now.getSeconds()}`.padStart(2, 0);
    const locale = navigator.language;
    const options = {
      day: `numeric`,
      month: `long`,
      year: `numeric`,
      weekday: `long`,
    };

    clock.textContent = `${hour}:${minute}:${second}`;
    date.textContent = Intl.DateTimeFormat(locale, options).format(now);
  }, 1000);
};
clockAndDate();

//////////////////////////////////////////////////
// // Timer Function
let time = 1;
let startTimer;

// Start Timer
const startTimerFunc = function () {
  startTimer = setInterval(() => {
    const hours = `${Math.trunc(time / 3600)}`.padStart(2, 0);
    const minutes = `${Math.trunc((time % 3600) / 60)}`.padStart(2, 0);
    const seconds = `${Math.trunc((time % 3600) % 60)}`.padStart(2, 0);

    timer.textContent = `${hours}:${minutes}:${seconds}`;
    time++;
  }, 1000);
  return time;
};
// Stop Timer
const stopTimerFunc = function () {
  clearInterval(startTimer);
};
// Reset Timer
const resetTimerFunc = function () {
  time = 1;
  timer.textContent = `00:00:00`;
  clearInterval(startTimer);
};

// Event Handlers For Timer
btnStartTimer.addEventListener(`click`, startTimerFunc);
btnStopTimer.addEventListener(`click`, stopTimerFunc);
btnResetTimer.addEventListener(`click`, resetTimerFunc);

/////////////////////////////////////////////////////
// // To Do Variables
const todoArray = [
  `Good Morning!`,
  `Get some tea...`,
  `Start Coding 💜`,
  `Eat something`,
  `Get to bed`,
  `Get Up...`,
  `Start Coding 💜`,
];

// // To Do Function
const displayTodo = function (todos) {
  // Clear List
  todoList.innerHTML = ``;
  // Display Todo List
  todos.forEach((todo, i, arr) => {
    const html = `<a class="list-group-item row">
      <p class="col-11 item-todo">${arr.length - i}. ${todo}</p>
      <button type="button" class="btn btn-danger delete-todo col-1 ">❌</button>
    </a>`;
    todoList.insertAdjacentHTML(`afterbegin`, html);
  });
  // Update Nodelist of Todo delete button
  btnsDeleteTodo = document.querySelectorAll(`.delete-todo`);
  // Delete Event
  btnsDeleteTodo.forEach((btnDeleteTodo, i, arr) => {
    btnDeleteTodo.addEventListener(`click`, function () {
      todoArray.splice([arr.length - (i + 1)], 1);
      displayTodo(todoArray);
    });
  });
};

// // Events
// Add Event for To Do
btnAddTodo.addEventListener(`click`, function () {
  const text = todoText.value;
  todoText.value = ``;
  if (text) todoArray.push(text);
  displayTodo(todoArray);
});

// Clear All Event for Todo
btnClearTodo.addEventListener(`click`, function () {
  todoArray.splice(0);
  displayTodo(todoArray);
});

// // Intialization of Todo List
displayTodo(todoArray);
