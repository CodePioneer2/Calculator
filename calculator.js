const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.calculator-screen');
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const divide = (a, b) => a / b;
const mult = (a, b) => a * b;
let num1 = null;
let num2 = null;
let operator = null;
let isOperator = null;

// Event listener

const operate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return sum(num1, num2);
    case '-':
      return sub(num1, num2);
    case '/':
      return divide(num1, num2);
    case '*':
      return mult(num1, num2);
    default:
      console.log('error');
      break;
  }
  return 'error';
};

const updateScreen = (btnValue) => {
  const btnValueNum = Number(btnValue);
  if (screen.textContent === '0') {
    screen.textContent = '';
  }
  if (btnValue == 'AC') {
    screen.textContent = '0';
    num1 = null;
    num2 = null;
    operator = null;
    isOperator = null;
    return;
  }

  if (btnValue == '=' && num1 && num2) {
    const result = operate(num1, num2, operator);
    num1 = result;
    num2 = null;
    screen.textContent = result;
    return;
  }

  // Check if operator is pressed
  if (isNaN(btnValueNum)) {
    operator = btnValue;
    isOperator = true;
    screen.textContent = '0';
    return;
  }

  if (btnValueNum === 0) {
    !isOperator ? (num1 *= 10) : (num2 *= 10);
  }
  !isOperator && btnValueNum !== 0
    ? (num1 += btnValueNum)
    : (num2 += btnValueNum);

  console.log(num1);
  console.log(num2);
  screen.textContent += btnValueNum;
};

// Add eventlisteners
buttons.forEach((button) =>
  button.addEventListener('click', () => updateScreen(button.value))
);
