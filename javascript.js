let buttons = document.querySelectorAll("button");
let numbers = document.querySelectorAll(".number");
let symbols = document.querySelectorAll(".symbol");
let screen = document.querySelector(".display");
let currentValue = 0;
let zero = 0;
let symbol = "";
let currentTotal = 0;

function handleNumber() {
  currentValue = Number(currentValue + this.innerText);
  screen.innerText = currentValue;
}

function handleSymbol() {
  symbol = this.innerText;
}

function handleOperator() {
  switch (symbol) {
    case "+":
    case "X":
    case "-":
    case "÷":
      handleMath();
      break;
    case "=":
      handleEqual();
      break;
    case "C":
      handleC();
    case "⌫":
      handleDelete();
  }
}

function handleDelete() {
  if (screen.innerText == currentValue) {
    currentValue = String(currentValue);
    currentValue = currentValue.slice(0, -1);
    currentValue = Number(currentValue);
    screen.innerText = currentValue;
  } else if (screen.innerText == total) {
    total = String(total);
    total = total.slice(0, -1);
    total = Number(total);
    currentTotal = total;
    screen.innerText = total;
  }
}
function handleC() {
  currentValue = 0;
  zero = 0;
  symbol = "";
  currentTotal = 0;
  total = 0;
  screen.innerText = zero;
}

function handleMath() {
  currentTotal = currentTotal + currentValue;
  currentValue = 0;
  previousOperator = symbol;
}

function handleEqual() {
  if (previousOperator === "+") {
    total = currentTotal + currentValue;
    currentTotal = total;
    screen.innerText = total;
    currentValue = 0;
  } else if (previousOperator === "X") {
    total = currentTotal * currentValue;
    currentTotal = total;
    screen.innerText = total;
    currentValue = 0;
  } else if (previousOperator === "-") {
    total = currentTotal - currentValue;
    currentTotal = total;
    screen.innerText = total;
    currentValue = 0;
  } else if (previousOperator === "÷") {
    total = currentTotal / currentValue;
    currentTotal = total;
    screen.innerText = total;
    currentValue = 0;
  }
}

numbers.forEach((number) => number.addEventListener("click", handleNumber));
symbols.forEach((symbol) => symbol.addEventListener("click", handleSymbol));
symbols.forEach((symbol) => symbol.addEventListener("click", handleOperator));
