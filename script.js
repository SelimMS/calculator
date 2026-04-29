const backspace = document.querySelector("#backspace")
const clear = document.querySelector("#clear")
const percent = document.querySelector("#percent")
const division = document.querySelector("#divide")
const times = document.querySelector("#times")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const plusminus = document.querySelector("#plusminus")
const dot = document.querySelector("#dot button")
const equals = document.querySelector("#equals")
const display = document.querySelector(".calc-display")

let total = 0
display.textContent = "0"

clear.addEventListener('click', () => {
  let total = 0
  display.textContent = "0"
  dot.disabled = false;
})

backspace.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1)
})

const numButtons = document.querySelectorAll('.num button')
numButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (display.textContent === '0') {
      display.textContent = ''
    }
    if (display.textContent.includes('.')) {
      dot.disabled = true;
    }
    display.textContent += e.target.value;
    total = strToNum(display.textContent)
    console.log(total)
  });
})

function strToNum(str) {
  const num = parseFloat(str)
  return num
  console.log(num)
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "Not divisble by 0"
  }
  return a / b;
}

function operate(operator, a, b) {
  return operator(a,b)
}

// console.log(operate(add(5,1)))