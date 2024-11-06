// Get Elements
const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".sign")
const deleteButton = document.getElementById("delete")
const equalSign = document.getElementById("equal-sign")
const cancelButton = document.getElementById("cancel")

// Display Elements on Click

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      display.value += button.value;
    });
  });

  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      display.value += button.value;
    });
  });

// Delete and cancel functionality

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

deleteButton.addEventListener('click', deleteLastCharacter);
cancelButton.addEventListener('click', clearDisplay);


function handleButtonClick(value) {


}

function updateDisplayValue() {

}

// Operations Logic

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function toggleSign() {
    // for the plus minus button
}
