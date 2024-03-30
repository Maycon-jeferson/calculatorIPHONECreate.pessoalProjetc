let firtValue = 0
let currentValue = 0
let result = 0
let operator = ''
let currentOperator = ''

let operationValue = document.getElementsByClassName('btnact');
function operatioClick(event) {
    let value = event.target.textContent;
    operator = value
    console.log('op '+operator)
    
    if(firtValue === 0){
       firtValue = parseFloat(display.value)
       console.log('V '+firtValue)
       inputValue = []
    }else if(firtValue !== 0){
        currentValue = parseFloat(display.value)
        console.log('CV '+currentValue)
        events()
        operator = ''
    }
}

currentOperator = operator
        console.log("cuOp "+currentOperator)


function events(){

    switch(operator){
        case '+':
            result = firtValue + parseFloat(display.value)
        break

        case '-':
            result = firtValue - parseFloat(display.value)
        break

        case 'X':
            result = firtValue * parseFloat(display.value)
        break

        case '/':
            result = firtValue / parseFloat(display.value)
        break

        default:
            result = 'erro'
    }

    
    display.value = result
    console.log('result = '+result)

    inputValue = []
    firtValue = result
    currentValue = parseFloat(display)
    result = 0
}



for (let i = 0; i < operationValue.length; i++) {
    operationValue[i].addEventListener('click', operatioClick);
}

let equalClick = document.getElementById('igual')
equalClick.addEventListener('click', events)

const clean = document.getElementById("clean")
  clean.addEventListener('click', function ac(){
    firtValue = 0
    currentValue = 0
    operator = ''
    result = 0
    inputValue = []
    display.value = 0
  })
