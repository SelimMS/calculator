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
  total = 0
  count = 0
  digits = []
  a = 0
  b = 0
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
let currentOperator = ''

//Add
plus.addEventListener('click', () => {
  currentOperator = 'add'
  console.log(currentOperator)
  display.textContent += '+'
  dot.disabled = false
  // digits = []
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
      } else {
        result = a
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

//Subtract
minus.addEventListener('click', () => {
  currentOperator = 'minus'
  console.log(currentOperator)
  console.log(display.textContent)
  if (display.textContent == 0) {
    display.textContent = display.textContent.slice(1)
  }
  display.textContent += '-'
  dot.disabled = false
  if (digits.length == 1) {
    if(!result || result.length < display.textContent.length) {
      let split = ''
      if (display.textContent.slice(0, 1) == '-'){
        digits = []
        display.textContent = display.textContent.slice(1)
        split = display.textContent.split('-')
        split[0] = -split[0]
        split.forEach(num => {
          digits.push(strToNum(num))
        })
      } else {
        digits = []
        split = display.textContent.split('-')
        split.forEach(num => {
          digits.push(strToNum(num))
        })
      }
      a = digits[0]
      b = digits[1]
      if(b) {
        result = operate(subtract, a, b)
      } else {
        b = 0
        result = a
      }
      display.textContent = result + '-'
      digits = []
      count = display.textContent.length
    }
  }
  if(display.textContent.includes('--')) {
    display.textContent = display.textContent.slice(0, -1)
  }
  total = strToNum(display.textContent)
  digits.push(total)
})

equals.addEventListener('click', () => {
  // Addition
  if (currentOperator == 'add') {
    if (result == display.textContent) {
      result += b
      display.textContent = result
    }
    if(display.textContent.includes('+')) {
      let split = display.textContent.split('+')
      split.forEach(num => {
        digits.push(strToNum(num))
      })
      a = digits[0]
      b = digits[2]
      if(b) {
        result = operate(add, a, b)
      } else {
        b = 0
        result = a
      }
      display.textContent = result
      digits = []
      count = display.textContent.length
    }
  }
  // Subtraction
  if (currentOperator == 'minus') {
    digits = []
    if (result == display.textContent) {
      result -= b
      display.textContent = result
    } else {      
      let split = ''
      if (display.textContent.slice(0, 1) == '-'){
        digits = []
        display.textContent = display.textContent.slice(1)
        split = display.textContent.split('-')
        split[0] = -split[0]
        split.forEach(num => {
          digits.push(strToNum(num))
        })
      } else {
        digits = []
        split = display.textContent.split('-')
        split.forEach(num => {
          digits.push(strToNum(num))
        })
      }
      a = digits[0]
      b = digits[1]
      if(b) {
        result = operate(subtract, a, b)
      } else {
        b = 0
        result = a
      }
      display.textContent = result
      digits = []
      count = display.textContent.length
    }
  }
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
