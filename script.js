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
display.textContent = 0
let count = 0

document.addEventListener("keydown", (event) => {
  const keyName = event.key
  if (keyName == 'c') {
    clearCalc()
  }
  if (display.textContent == 'Cannot divide by 0') {

  } else {
    if (keyName == 'Backspace') {
      bSpace()
    }
    if (keyName == '.') {
      display.textContent += '.'
      if (display.textContent.includes('..')) {
        display.textContent = display.textContent.slice(0, -1)
      }
    }
    if (keyName == '+') {
      plusClick()
      count -= 2
    }
    if (keyName == '-') {
      minusClick()
    }
    if (keyName == '*') {
      timesClick()
    }
    if (keyName == '/') {
      divideClick()
    }
    if (keyName == '%') {
      display.textContent = display.textContent + '%'
      if (display.textContent.includes('%%')) {
        display.textContent = display.textContent.slice(0, -1)
      }
    }
    if (keyName == '=' || keyName == 'Enter') {
      equalsClick()
    }
    if (count <= 13) {
      if (keyName == '+' || keyName == '-' || keyName == '/' || keyName == '*') {
        count = (count / 2) + 1
      } else {
        if (display.textContent == 0) {
          display.textContent = display.textContent.slice(0, -1)
        }
        if (keyName == '1') {
          display.textContent += 1
          count += 1
        }
        if (keyName == '2') {
          display.textContent += 2
          count += 1
        }
        if (keyName == '3') {
          display.textContent += 3
          count += 1
        }
        if (keyName == '4') {
          display.textContent += 4
          count += 1
        }
        if (keyName == '5') {
          display.textContent += 5
          count += 1
        }
        if (keyName == '6') {
          display.textContent += 6
          count += 1
        }
        if (keyName == '7') {
          display.textContent += 7
          count += 1
        }
        if (keyName == '8') {
          display.textContent += 8
          count += 1
        }
        if (keyName == '9') {
          display.textContent += 9
          count += 1
        }
        if (keyName == '0') {
          display.textContent += 0
          count += 1
        }
      }
    }
  }
})

clear.addEventListener('click', () => {
  clearCalc()
})

backspace.addEventListener('click', () => {
  bSpace()
})

function toggleMinus() {
  if (display.textContent == 'Cannot divide by 0') {

  } else {
    if (digits.length == 1) {
      if (display.textContent.includes('+')){
        let split = ''
        split = display.textContent.split('+')
        result = split[0] + '+-' + split[1]
        display.textContent = result
        total = strToNum(display.textContent)
        if (display.textContent.includes('--')) {
          display.textContent = display.textContent.replace('--', '')
          total = strToNum(display.textContent)
        }
      }
      if (display.textContent.includes('×')){
        let split = ''
        split = display.textContent.split('×')
        result = split[0] + '×-' + split[1]
        display.textContent = result
        total = strToNum(display.textContent)
        if (display.textContent.includes('--')) {
          display.textContent = display.textContent.replace('--', '')
          total = strToNum(display.textContent)
        }
      }
      if (display.textContent.includes('÷')){
        let split = ''
        split = display.textContent.split('÷')
        result = split[0] + '÷-' + split[1]
        display.textContent = result
        total = strToNum(display.textContent)
        if (display.textContent.includes('--')) {
          display.textContent = display.textContent.replace('--', '')
          total = strToNum(display.textContent)
        }
      }
    } else {
      let prev = display.textContent
      display.textContent = '-' + display.textContent
      total = strToNum(display.textContent)
      if (display.textContent.includes('--')) {
        display.textContent = display.textContent.slice(2)
        total = strToNum(display.textContent)
      }
    }
  }
}

plusminus.addEventListener('click', toggleMinus)

dot.addEventListener('click', () => {
  dot.disabled = true;
})

const numButtons = document.querySelectorAll('.num button')
numButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (display.textContent == 'Cannot divide by 0') {
      button.disabled = true;
    } else if (display.textContent == 'Infinity'){
      button.disabled = true;
    } else {
      if (display.textContent === '0') {
        display.textContent = ''
      }
      display.textContent += e.target.value;
      total = strToNum(display.textContent)
      count += 1
      if (count >= 14) {
        numButtons.forEach(button => {
          button.disabled = true;
        })
      }
    }
  });
})

let digits = []
let result = 0
let a = 0
let b = 0
let currentOperator = ''
let operatorList = []
const operatorLimiter = () => {
  if (operatorList.length > 3) {
    operatorList.shift()
  }
}

operators.forEach(button => {
  button.addEventListener('click', () => {
    count = (count / 2) + 1
    numButtons.forEach(button => {
      button.disabled = false;
    })
  })
})

// Add
plus.addEventListener('click', () => {
  plusClick()
})

// Subtract
minus.addEventListener('click', () => {
  minusClick()
})

// Multiply
times.addEventListener('click', () => {
  timesClick()
})

// Divide
division.addEventListener('click', () => {
  divideClick()
})

// Percentage
percent.addEventListener('click', ()=> {
  display.textContent = display.textContent + '%'
  if (display.textContent.includes('%%')) {
    display.textContent = display.textContent.slice(0, -1)
  }
})

// Equals
equals.addEventListener('click', () => {
  equalsClick()
})

function clearCalc() {
  display.textContent = 0
  total = 0
  count = 0
  digits = []
  currentOperator = ''
  operatorList = []
  a = 0
  b = 0
  dot.disabled = false;
  numButtons.forEach(button => {
    button.disabled = false;
  })
  operators.forEach(button => {
    button.disabled = false;
  })
}

function bSpace() {
  if (display.textContent == 'Infinity') {

  } else {
    if (display.textContent != 'Cannot divide by 0') {
      display.textContent = display.textContent.slice(0, -1);
      count -= 1;
      numButtons.forEach(button => {
        button.disabled = false;
      })
    }
  }
}

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
    display.textContent = "Cannot divide by 0"
  } else {
    return a / b;
  }
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

function plusClick() {
  currentOperator = 'add'
  operatorList.push(currentOperator)
  operatorLimiter()
  display.textContent += '+'
  dot.disabled = false
  if (digits.length == 1) {
    let prevOperator = operatorList[operatorList.length -2]
    // If prev was subtract
    if(prevOperator == 'minus') {
      fullSubtraction()
      display.textContent = result + '+'
      digits = []
      count = display.textContent.length
    }
    // If prev was add
    if(prevOperator == 'add') {
      fullAddition()
      display.textContent = result + '+'
      digits = []
      count = display.textContent.length
    }
    // If prev was times
    if(prevOperator == 'times') {
      fullMultiplication()
      display.textContent = result + '+'
      digits = []
      count = display.textContent.length
    }
    // If prev was divide
    if(prevOperator == 'divide') {
      fullDivision()
      digits = []
      count = display.textContent.length
    }
  }
  if(display.textContent.includes('++')) {
    display.textContent = display.textContent.slice(0, -1)
  }
  total = strToNum(display.textContent)
  digits.push(total)
}

function fullAddition() {
  let split = display.textContent.split('+')
  split.forEach(num => {
    if(num.includes('%')) {
      sliced = strToNum(num.slice(0, -1))
      digits.push(strToNum(percentage(sliced)))
    } else {
      digits.push(strToNum(num))
    }
  })
  a = digits[1]
  b = digits[2]
  if(b) {
    result = operate(add, a, b)
  } else {
    result = a
  }
}

function minusClick() {
  currentOperator = 'minus'
  operatorList.push(currentOperator)
  operatorLimiter()
  if (display.textContent == 0) {
    display.textContent = display.textContent.slice(1)
  }
  display.textContent += '-'
  dot.disabled = false
  if (digits.length == 1) {
    let prevOperator = operatorList[operatorList.length -2]
    // If prev was add
    if(prevOperator == 'add') {
      fullAddition()
      display.textContent = result + '-'
      digits = []
      count = display.textContent.length
    }
    // If prev was subtract
    if(prevOperator == 'minus') {
      fullSubtraction()
      display.textContent = result + '-'
      digits = []
      count = display.textContent.length
    }
    // If prev was times
    if(prevOperator == 'times') {
      fullMultiplication()
      display.textContent = result + '-'
      digits = []
      count = display.textContent.length
    }
    // If prev was divide
    if(prevOperator == 'divide') {
      fullDivision()
      digits = []
      count = display.textContent.length
    }
  }
  if(display.textContent.includes('--')) {
    display.textContent = display.textContent.slice(0, -1)
  }
  total = strToNum(display.textContent)
  digits.push(total)
}

function fullSubtraction() {
  let split = ''
  if (display.textContent.slice(0, 1) == '-'){
    digits = []
    display.textContent = display.textContent.slice(1)
    split = display.textContent.split('-')
    split[0] = -split[0]
    split.forEach(num => {
      if(num.includes('%')) {
        sliced = strToNum(num.slice(0, -1))
        digits.push(strToNum(percentage(sliced)))
      } else {
        digits.push(strToNum(num))
      }
    })
  } else {
    digits = []
    split = display.textContent.split('-')
    split.forEach(num => {
      if(num.includes('%')) {
        sliced = strToNum(num.slice(0, -1))
        digits.push(strToNum(percentage(sliced)))
      } else {
        digits.push(strToNum(num))
      }
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
}

function timesClick() {
  currentOperator = 'times'
  operatorList.push(currentOperator)
  operatorLimiter()
  display.textContent += '×'
  dot.disabled = false
  if (digits.length == 1) {
    let prevOperator = operatorList[operatorList.length -2]
    // If prev was subtract
    if(prevOperator == 'minus') {
      fullSubtraction()
      display.textContent = result + '×'
      digits = []
      count = display.textContent.length
    }
    // If prev was add
    if(prevOperator == 'add') {
      fullAddition()
      display.textContent = result + '×'
      digits = []
      count = display.textContent.length
    }
    // If prev was times
    if(prevOperator == 'times') {
      fullMultiplication()
      display.textContent = result + '×'
      digits = []
      count = display.textContent.length
    }
    // If prev was divide
    if(prevOperator == 'divide') {
      fullDivision()
      digits = []
      count = display.textContent.length
    }
  }
  if(display.textContent.includes('××')) {
    display.textContent = display.textContent.slice(0, -1)
  }
  total = strToNum(display.textContent)
  digits.push(total)
}

function fullMultiplication() {
  let split = display.textContent.split('×')
  split.forEach(num => {
    if(num.includes('%')) {
      sliced = strToNum(num.slice(0, -1))
      digits.push(strToNum(percentage(sliced)))
    } else {
      digits.push(strToNum(num))
    }
  })
  a = digits[1]
  b = digits[2]
  if(b) {
    result = operate(multiply, a, b)
  } else {
    result = 0
  }
}

function divideClick() {
  currentOperator = 'divide'
  operatorList.push(currentOperator)
  operatorLimiter()
  display.textContent += '÷'
  dot.disabled = false
  if (digits.length == 1) {
    let prevOperator = operatorList[operatorList.length -2]
    // If prev was subtract
    if(prevOperator == 'minus') {
      fullSubtraction()
      display.textContent = result + '÷'
      digits = []
      count = display.textContent.length
    }
    // If prev was add
    if(prevOperator == 'add') {
      fullAddition()
      display.textContent = result + '÷'
      digits = []
      count = display.textContent.length
    }
    // If prev was times
    if(prevOperator == 'times') {
      fullMultiplication()
      display.textContent = result + '÷'
      digits = []
      count = display.textContent.length
    }
    // If prev was divide
    if(prevOperator == 'divide') {
      fullDivision()
      digits = []
      count = display.textContent.length
    }
  }
  if(display.textContent.includes('÷÷')) {
    display.textContent = display.textContent.slice(0, -1)
  }
  total = strToNum(display.textContent)
  digits.push(total)
}

function fullDivision() {
  let split = display.textContent.split('÷')
  split.forEach(num => {
    if(num.includes('%')) {
      sliced = strToNum(num.slice(0, -1))
      digits.push(strToNum(percentage(sliced)))
    } else {
      digits.push(strToNum(num))
    }
  })
  a = digits[1]
  b = digits[2]
  if(b) {
    result = operate(divide, a, b)
    if (currentOperator == 'add') {
      display.textContent = result + '+'
    } else if (currentOperator == 'minus') {
      display.textContent = result + '-'
    } else if (currentOperator == 'times') {
      display.textContent = result + '×'
    } else if (currentOperator == 'divide') {
      display.textContent = result + '÷'
    }
  } else {
    result = 'Cannot divide by 0'
    operators.forEach(button => {
      button.disabled = true;
    })
    display.textContent = result
  }
}

function equalsClick() {
  let toOperate = display.textContent
  let lastDigit = display.textContent.slice(-1)
  // Addition
  if (currentOperator == 'add') {
    if (result == display.textContent) {
      result += b
      display.textContent = result
    }
    if(display.textContent.includes('+')) {
      let split = toOperate.split('+')
      split.forEach(num => {
        if(num.includes('%')) {
          sliced = strToNum(num.slice(0, -1))
          digits.push(strToNum(percentage(sliced)))
        } else {
          digits.push(strToNum(num))
        }
      })
      a = digits[1]
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
          if(num.includes('%')) {
            sliced = strToNum(num.slice(0, -1))
            digits.push(strToNum(percentage(sliced)))
          } else {
            digits.push(strToNum(num))
          }
        })
      } else {
        digits = []
        split = display.textContent.split('-')
        split.forEach(num => {
          if(num.includes('%')) {
            sliced = strToNum(num.slice(0, -1))
            digits.push(strToNum(percentage(sliced)))
          } else {
            digits.push(strToNum(num))
          }
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
  // Multiplication
  if (currentOperator == 'times') {
    if (result == display.textContent) {
      result *= b
      display.textContent = result
    }
    if(toOperate.includes('×')) {
      let split = toOperate.split('×')
      split.forEach(num => {
        if(num.includes('%')) {
          sliced = strToNum(num.slice(0, -1))
          digits.push(strToNum(percentage(sliced)))
        } else {
          digits.push(strToNum(num))
        }
      })
      a = digits[1]
      b = digits[2]
      if(b) {
        result = operate(multiply, a, b)
      } else {
        b = 0
        result = 0
      }
      display.textContent = result
      digits = []
      count = display.textContent.length
    }
  }
  // Division
  if (currentOperator == 'divide') {
    if (result == display.textContent) {
      result /= b
      display.textContent = result
    }
    if(toOperate.includes('÷')) {
      let split = toOperate.split('÷')
      split.forEach(num => {
        if(num.includes('%')) {
          sliced = strToNum(num.slice(0, -1))
          digits.push(strToNum(percentage(sliced)))
        } else {
          digits.push(strToNum(num))
        }
      })
      a = digits[1]
      b = digits[2]
      if(b) {
        result = operate(divide, a, b)
      } else {
        b = 0
        result = 'Cannot divide by 0'
        operators.forEach(button => {
          button.disabled = true;
        })
      }
      display.textContent = result
      digits = []
      count = display.textContent.length
    }
  }
  // Percentage
  if (lastDigit == '%') {
    let split = toOperate.slice(0, -1)
    digits.push(strToNum(split))
    a = digits[0]
    result = percentage(a)
    display.textContent = result
    digits = []
    count = display.textContent.length
  }
}