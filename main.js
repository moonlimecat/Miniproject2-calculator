const container = document.querySelector(".container");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];

//Define function to calculate based on button clicked.
const calculate = (btnValue) => {
  console.log(btnValue);
};

// Add event listener to buttons, call calculate() on click
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
