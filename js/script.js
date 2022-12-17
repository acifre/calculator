// TO DO

// GLOBAL VARIABLES

let number1 = "empty";
let number2 = "empty";
let operatorFunction = "empty";
let display = 0;
let result = 0;
let equalPressed = false;
let operatorPressed = false;

// 1. Create functions for add, subtract, multiply, divide:     

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
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
            if (num1 === 0 && num2 === 0) {
                alert('Black holes are where God divided by zero. -Albert Einstein');
                return 0;
            }
            return divide(num1, num2);
        default:
            console.log('Error, invalid function')
            return -999
    }
}

// 3. Create functions that populate display

const displayText = document.querySelector(".item-display");
displayText.innerHTML = 0;

//OPERATOR LISTENERS
const operators = document.querySelectorAll(".operator");

for (let operator of operators) {
    operator.addEventListener('click', () => {

        if (!operatorPressed) {
            operatorFunction = operator.id;
            displayText.innerHTML = operator.innerHTML;
            equalPressed = false;
            operatorPressed = true;
        } else if (operatorPressed && number1 != 'empty' && number2 != 'empty') {
            let oldOperator = operatorFunction;
            result = +operate(oldOperator, parseInt(number1), parseInt(number2)).toFixed(8);
            operatorFunction = operator.id;
            number1 = result;
            number2 = 'empty';
            displayText.innerHTML = number1;
        } else if (operatorPressed && number2 === 'empty') {
            operatorFunction = operator.id;
            displayText.innerHTML = operator.innerHTML;
            equalPressed = false;
        }

    })
}

//NUMBER LISTENERS

const numbers = document.querySelectorAll(".number");

for (let number of numbers) {
    number.addEventListener('click', () => {
        if (number1 === 'empty' && operatorFunction === 'empty' && number2 === 'empty') {
            number1 = number.innerHTML;
            displayText.innerHTML = number.innerHTML;
            console.log([1, number1, number2])
        } else if (number1 != 'empty' && operatorFunction === 'empty' && number2 === 'empty') {
            number1 += number.innerHTML;
            displayText.innerHTML = number1;
            console.log([2, number1, number2])
        } else if (number1 != 'empty' && operatorFunction != 'empty' && number2 === 'empty') {
            number2 = number.innerHTML;
            displayText.innerHTML = number.innerHTML;
            console.log([3, number1, number2])
        } else if (number1 != 'empty' && operatorFunction != 'empty' && number2 != 'empty' && !equalPressed) { // !equalpressed so that numbers keep getting added to number2
            number2 += number.innerHTML;
            displayText.innerHTML = number2;
            console.log([4, number1, number2])
        } else {
            displayText.innerHTML = 0;
            alert("Error too many numbers.");
            console.log([5, number1, number2])
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
    operatorPressed = false;
    equalPressed = false;
    displayText.innerHTML = result;

    console.log([number1, number2, operatorFunction]);
}


// EQUAL BUTTON

const equalBtn = document.querySelector('.item-equal');

equalBtn.addEventListener('click', () => {
    result = +operate(operatorFunction, parseInt(number1), parseInt(number2)).toFixed(8);

    displayText.innerHTML = result;
    equalPressed = true;
    number1 = result;
    number2 = 'empty';

    console.log([number1, number2, operatorFunction, operatorPressed, equalPressed])
});

// TRANSITIONS

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', () => {
        button.classList.add('pressed');
    })
}

for (let button of buttons) {
    button.addEventListener('transitionend', removeTransition)
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('pressed');
  }

