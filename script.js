const digitsButtons = document.querySelectorAll(".digit");
const clearButton = document.getElementById("clear-btn");
const screenDisplay = document.getElementById("screen-display");
const operationButtons = document.querySelectorAll(".operation");
const addButton = document.getElementById("add-btn");
const subtractButton = document.getElementById("subtract-btn");
const multiplyButton = document.getElementById("multiply-btn");
const divideButton = document.getElementById("divide-btn");
const equalButton = document.getElementById("equal-btn");

let previousOperation; 

equalButton.addEventListener('click', function(e) {
    if (typeof(previousOperation) == "function") {
        screenDisplayValue = previousOperation(firstInput, screenDisplayValue);
    }
    showDisplay();
})

addButton.addEventListener('click', function(e) {
    if (firstInput !== 0) {
        screenDisplayValue = previousOperation(firstInput, screenDisplayValue)
    }
    firstInput = screenDisplayValue;
    showDisplay();
    screenDisplayValue = 0;
    previousOperation = operators.add; 
    // equalButton.click();
});

subtractButton.addEventListener('click', function(e) {
    if (firstInput !== 0) {
        screenDisplayValue = previousOperation(firstInput, screenDisplayValue)
    }
    firstInput = screenDisplayValue;
    showDisplay();
    screenDisplayValue = 0;
    previousOperation = operators.subtract;
});

multiplyButton.addEventListener('click', function(e) {
    if (firstInput !== 0) {
        screenDisplayValue = previousOperation(firstInput, screenDisplayValue)
    }
    firstInput = screenDisplayValue;
    showDisplay();
    screenDisplayValue = 0;
    previousOperation = operators.multiply;
});

divideButton.addEventListener('click', function(e) {
    if (firstInput !== 0) {
        screenDisplayValue = previousOperation(firstInput, screenDisplayValue)
    }
    firstInput = screenDisplayValue;
    showDisplay();
    screenDisplayValue = 0;
    previousOperation = operators.divide; 
});

let operators = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b, 
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : NaN, 
}

function operate(a, b, operation) {
    return operation(a, b);
}


let screenDisplayValue = ""; 

clearButton.addEventListener('click', function () {
    screenDisplayValue = 0;
    firstInput = 0;
    secondInput = 0;
    previousOperation = null; 
    showDisplay();
});

function showDisplay() {
    screenDisplayValue = Math.round(screenDisplayValue * 100)/100; 
    screenDisplay.textContent = screenDisplayValue;
}
// add event listener for clicks on digits
for (let i = 0; i < digitsButtons.length; i++){
    digitsButtons[i].addEventListener('click', function(e) {
        if (screenDisplayValue == 0) {
            screenDisplayValue = e.target.textContent;
            screenDisplayValue = Number(screenDisplayValue);
        }
        else {
            screenDisplayValue += e.target.textContent;
            screenDisplayValue = Number(screenDisplayValue);
        }
        showDisplay();
    })
}

let firstInput = 0;
let secondInput = 0; 









