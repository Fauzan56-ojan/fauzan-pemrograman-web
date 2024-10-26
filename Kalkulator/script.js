const display = document.querySelector('#display');
const keys = document.querySelector('.calculator-keys');

let currentInput = '0';  
let expression = '';     
let operator = '';       
let isOperatorClicked = false;  

keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;

    if (!target.matches('button')) {
        return;
    }

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator(value);
            break;
        case '=':
            calculate();
            break;
        case 'all-clear':
            clearAll();
            break;
        case '.':
            inputDecimal(value);
            break;
        default:
            if (Number.isInteger(parseFloat(value))) {
                inputNumber(value);
            }
    }

    updateDisplay();
});

function handleOperator(nextOperator) {
    if (!isOperatorClicked) {
        expression += currentInput + ' ' + nextOperator + ' ';
    }

    isOperatorClicked = true; 
    currentInput = ''; 
}

function calculate() {
    try {
        expression += currentInput;
        currentInput = eval(expression);
        expression = ''; 
    } catch (error) {
        currentInput = 'Error'; 
    }
}

function inputNumber(num) {
    if (isOperatorClicked) {
        currentInput = num;
        isOperatorClicked = false;
    } else {
        currentInput = currentInput === '0' ? num : currentInput + num;
    }
}

function inputDecimal(dot) {
    if (!currentInput.includes(dot)) {
        currentInput += dot;
    }
}

function clearAll() {
    currentInput = '0';
    expression = '';
    operator = '';
    isOperatorClicked = false;
}

function updateDisplay() {
    display.value = expression ? expression + currentInput : currentInput;
}

clearAll();