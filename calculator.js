
let displayValue = '0';
function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}
document.querySelectorAll('.number-btn, #btn-dot').forEach(button => {
  button.addEventListener('click', () => {
    const digit = button.innerText;
    if (displayValue === '0') {
      displayValue = digit;
    } else {
      displayValue += digit;
    }
    updateDisplay();
  });
});
document.getElementById('btn-clear').addEventListener('click', () => {
  displayValue = '0';
  updateDisplay();
});
document.querySelectorAll('.operator-btn').forEach(button => {
  button.addEventListener('click', () => {
    const operator = button.innerText;
    displayValue += ` ${operator} `;
    updateDisplay();
  });
});
document.getElementById('btn-equal').addEventListener('click', () => {
  displayValue = eval(displayValue).toString();
  updateDisplay();
});
