const display = document.getElementById('display')
let currentExpression = ''

function Digit(digit) {
  currentExpression += digit
  display.value = currentExpression
}

function Operator(operator) {
  currentExpression += operator
  display.value = currentExpression
}

function Decimal() {
  if (!currentExpression.includes('.')) {
    currentExpression += '.'
    display.value = currentExpression
  }
}

function clearDisplay() {
  currentExpression = ''
  display.value = ''
}

function calculate() {
  try {
    currentExpression = eval(currentExpression)
    display.value = currentExpression
  } catch (error) {
    display.value = 'Error'
    currentExpression = ''
  }
}
