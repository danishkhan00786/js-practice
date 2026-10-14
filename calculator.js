const prompt = require("prompt-sync")();   // Node only; remove this line in a browser

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return "Error: cannot divide by zero";
  }
  return a / b;
};

const x = Number(prompt("Enter first number: "));
const y = Number(prompt("Enter second number: "));
const operator = prompt("Enter operator (+, -, *, /): ");

let result;
if (operator === "+") {
  result = add(x, y);
} else if (operator === "-") {
  result = subtract(x, y);
} else if (operator === "*") {
  result = multiply(x, y);
} else if (operator === "/") {
  result = divide(x, y);
} else {
  result = "Error: unknown operator";
}

console.log("Result:", result);