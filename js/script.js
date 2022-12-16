// TO DO

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

function operate(func, num1, num2) {
    switch (func) {
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
// 4. Make calculator work

