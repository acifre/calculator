// TO DO

// GLOBAL VARIABLES

let number1 = "empty";
let number2 = "empty";
let operatorFunction = "empty";
let display = 0;
let result = 0;

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

//OPERATOR LISTENERS
const operators = document.querySelectorAll(".operator");

for (let operator of operators) {
    operator.addEventListener('click', () => {

        operatorFunction = operator.id;
        displayText.innerHTML = operator.innerHTML;

    })
}

//NUMBER LISTENERS

const numbers = document.querySelectorAll(".number");

for (let number of numbers) {
    number.addEventListener('click', () => {
        if (number1 === 'empty' && number2 === 'empty') {
            number1 = parseInt(number.innerHTML);
            displayText.innerHTML = number.innerHTML;
            console.log([1, number1, number2])
        } else if (number1 != 'empty' && number2 === 'empty') {
            number2 = parseInt(number.innerHTML);
            displayText.innerHTML = number.innerHTML;
            console.log([2, number1, number2])
        } else {
            displayText.innerHTML = 0;
            alert("Error too many numbers.");
            clear()
        }
    })
}



// add an event listener that on click 
//updates the display with selection
// store the selection in a variable num 1, num 2, operator 

// 4. Make calculator work


// CLEAR BUTTON

const clearBtn = document.querySelector('.item-clear');

clearBtn.addEventListener('click', clear);

function clear() {
    number1 = 'empty';
    number2 = 'empty';
    operatorFunction = 'empty';
    result = 0;
    displayText.innerHTML = result;

    console.log([number1, number2, operatorFunction]);
}


// EQUAL BUTTON

const equalBtn = document.querySelector('.item-equal');

equalBtn.addEventListener('click', () => {
    result = operate(operatorFunction, number1, number2);

    displayText.innerHTML = result;
});

