let display = document.getElementById('display');
let historyDiv = document.getElementById('history');
let currentInput = '';

function appendNumber(num) {
  if (display.textContent === '0') display.textContent = '';
  display.textContent += num;
  currentInput += num;
}

function appendOperator(op) {
  display.textContent += ' ' + op + ' ';
  currentInput += ' ' + op + ' ';
}

function appendDot() {
  display.textContent += '.';
  currentInput += '.';
}

function clearEntry() {
  display.textContent = '0';
  currentInput = '';
}

function clearAll() {
  display.textContent = '0';
  currentInput = '';
}

function backspace() {
  display.textContent = display.textContent.slice(0, -1);
  currentInput = currentInput.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(currentInput);
    addToHistory(`${currentInput} = ${result}`);
    display.textContent = result;
    currentInput = result.toString();
  } catch {
    display.textContent = 'Error';
    currentInput = '';
  }
}

function reciprocal() {
  let value = parseFloat(display.textContent);
  if (value !== 0) {
    let result = 1 / value;
    addToHistory(`1/(${value}) = ${result}`);
    display.textContent = result;
    currentInput = result.toString();
  }
}

function square() {
  let value = parseFloat(display.textContent);
  let result = value * value;
  addToHistory(`${value}² = ${result}`);
  display.textContent = result;
  currentInput = result.toString();
}

function sqrt() {
  let value = parseFloat(display.textContent);
  let result = Math.sqrt(value);
  addToHistory(`√(${value}) = ${result}`);
  display.textContent = result;
  currentInput = result.toString();
}

function addToHistory(entry) {
  let emptyMsg = document.getElementById('empty-history');
  if (emptyMsg) emptyMsg.style.display = 'none';

  let p = document.createElement('p');
  p.textContent = entry;
  historyDiv.prepend(p);
}

function clearHistory() {
  historyDiv.innerHTML = '<p id="empty-history">There\'s no history yet.</p>';
}
