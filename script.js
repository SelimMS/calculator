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
const operators = document.querySelectorAll(".operator button")

let total = 0
display.textContent = "0"
let count = 0

clear.addEventListener('click', () => {
  // total = 0
  // count = 0
  // display.textContent = "0"
  // dot.disabled = false;
  // numButtons.forEach(button => {
  //   button.disabled = false;
  // })
  location.reload()
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
  total = strToNum(display.textContent)
  if (display.textContent.includes('--')) {
    display.textContent = display.textContent.slice(2)
    total = strToNum(display.textContent)
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
    if (count >= 14) {
      numButtons.forEach(button => {
        button.disabled = true;
      })
    }
    console.log(`Count: ${count}`)
  });
})

let digits = []
let result = 0
let a = 0
let b = 0

plus.addEventListener('click', () => {
  display.textContent += '+'
  dot.disabled = false
  if (digits.length == 1) {
    if(display.textContent.includes('+')) {
      let split = display.textContent.split('+')
      split.forEach(num => {
        digits.push(strToNum(num))
      })
      a = digits[0]
      b = digits[2]
      if(b) {
        result = operate(add, a, b)
      }
      display.textContent = result + '+'
      digits = []
      count = display.textContent.length
    }
  }
  if(display.textContent.includes('++')) {
    display.textContent = display.textContent.slice(0, -1)
  }
  total = strToNum(display.textContent)
  digits.push(total)
})

equals.addEventListener('click', () => {
  // Addition
  if(display.textContent.includes('+')) {
    let split = display.textContent.split('+')
    split.forEach(num => {
      digits.push(strToNum(num))
    })
    a = digits[0]
    b = digits[2]
    result = operate(add, a, b)
    display.textContent = result
    digits = []
    count = display.textContent.length
  }
  // Subtraction
})
  
function strToNum(str) {
  const num = parseFloat(str)
  return num
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
