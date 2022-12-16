// TO DO

// GLOBAL VARIABLES

let number1 = "empty";
let number2 = "empty";
let operatorFunction = "empty";
let display = 0;

// 1. Create functions for:
//       add, subtract, multiply, divide


function add(num1, num2) {
    return num1 + num2;

}

function subtract(num1, num2) {
    return num2 > num1 ? (num2 - num1) : (num1 - num2);
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// 2. Create function operate

function operate(operator, num1, num2) {
    switch (operator) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            console.log("Error, invalid function")
            return -999
    }
}

// 3. Create functions that populate display

const displayText = document.querySelector(".item-display");

displayText.innerHTML = '0';

const operators = document.querySelectorAll(".operator");

for (let operator of operators) {
    operator.addEventListener('click', () => {

        operatorFunction = operator.id;
        displayText.innerHTML = operator.innerHTML;

    })
}

// add an event listener that on click 
//updates the display with selection
// store the selection in a variable num 1, num 2, operator 

// 4. Make calculator work

