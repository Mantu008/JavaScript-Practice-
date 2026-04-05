// ===============================
// 🔘 SIDEBAR TOGGLE (your code)
// ===============================
const toggleBtn = document.querySelector('.more__logo__btn');
const sidebar = document.querySelector('.calculator-sidebar');
const calculator__keypad = document.querySelector('.calculator__keypad');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  calculator__keypad.classList.toggle('sidebar-open');
});

// ===============================
// 🧠 CALCULATOR LOGIC
// ===============================
const display = document.querySelector('.calculator__display');
const buttons = document.querySelectorAll('.calculator__keypad button');
const historyContainer = document.querySelector('.sidebar__content');

let expression = '';
let history = [];

// ===============================
// 🎯 HANDLE BUTTON CLICK
// ===============================
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    let value = btn.innerText;

    switch (value) {
      case 'C':
        expression = '';
        display.value = '';
        break;

      case '⌫':
        expression = expression.slice(0, -1);
        display.value = expression;
        break;

      case '=':
        calculateResult();
        break;

      case '×':
        expression += '*';
        display.value = expression;
        break;

      case '÷':
        expression += '/';
        display.value = expression;
        break;

      case '−':
        expression += '-';
        display.value = expression;
        break;

      case 'π':
        expression += Math.PI;
        display.value = expression;
        break;

      case 'e':
        expression += Math.E;
        display.value = expression;
        break;

      case 'x²':
        expression = `(${expression})**2`;
        display.value = expression;
        break;

      case '√x':
      case '²√x':
        expression = `Math.sqrt(${expression})`;
        display.value = expression;
        break;

      case '1/x':
        expression = `1/(${expression})`;
        display.value = expression;
        break;

      case 'sin':
        expression = `Math.sin(${expression})`;
        display.value = expression;
        break;

      case 'cos':
        expression = `Math.cos(${expression})`;
        display.value = expression;
        break;

      case 'tan':
        expression = `Math.tan(${expression})`;
        display.value = expression;
        break;

      case 'log':
        expression = `Math.log10(${expression})`;
        display.value = expression;
        break;

      case 'ln':
        expression = `Math.log(${expression})`;
        display.value = expression;
        break;

      case '|x|':
        expression = `Math.abs(${expression})`;
        display.value = expression;
        break;

      case 'n!':
        expression = factorial(Number(expression));
        display.value = expression;
        break;

      case '±':
        expression = (-Number(expression)).toString();
        display.value = expression;
        break;

      default:
        expression += value;
        display.value = expression;
    }
  });
});

// ===============================
// 🧮 CALCULATE RESULT
// ===============================
function calculateResult() {
  try {
    let result = eval(expression);

    // save history
    history.push(`${expression} = ${result}`);
    updateHistory();

    display.value = result;
    expression = result.toString();
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}

// ===============================
// 📜 UPDATE HISTORY
// ===============================
function updateHistory() {
  historyContainer.innerHTML = '';

  history
    .slice()
    .reverse()
    .forEach((item) => {
      let p = document.createElement('p');
      p.textContent = item;
      historyContainer.appendChild(p);
    });
}

// ===============================
// 🔢 FACTORIAL FUNCTION
// ===============================
function factorial(n) {
  if (n < 0) return 'Error';
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
