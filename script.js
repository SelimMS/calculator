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
let count = 0

clear.addEventListener('click', () => {
  total = 0
  count = 0
  display.textContent = "0"
  dot.disabled = false;
  numButtons.forEach(button => {
    button.disabled = false;
  })
})

backspace.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1);
  count -= 1;
  numButtons.forEach(button => {
    button.disabled = false;
  })
  if (display.textContent.includes('.')) {
    dot.disabled = true;
  }
})

function toggleMinus() {
  let prev = display.textContent
  display.textContent = '-' + display.textContent
  if (display.textContent.includes('--')) {
    display.textContent = display.textContent.slice(2)
  }
}

plusminus.addEventListener('click', toggleMinus)

const numButtons = document.querySelectorAll('.num button')
numButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (display.textContent === '0') {
      display.textContent = ''
    }
    dot.addEventListener('click', () => {
      dot.disabled = true;
    })
    display.textContent += e.target.value;
    total = strToNum(display.textContent)
    console.log(total)
    count += 1
    if (count >= 18) {
      numButtons.forEach(button => {
        button.disabled = true;
      })
    }
    console.log(`Count: ${count}`)
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
    return "Cannot divide by 0"
  }
  return a / b;
}

function percentage(a) {
  return a / 100
}

function operate(operator, a, b) {
  if (operator == add) {
    return add(a, b)
  }
  if (operator == subtract) {
    return subtract(a, b)
  }
  if (operator == divide) {
    return divide(a, b)
  }
  if (operator == multiply) {
    return multiply(a, b)
  }
}
