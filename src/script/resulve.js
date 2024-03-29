let firtValue = 0
let currentValue = 0
let result
let operator = ''

let operationValue = document.getElementsByClassName('btnact');
function operatioClick(event) {
    let value = event.target.textContent;
    operator = value
    
    if(firtValue === 0){
       firtValue = parseFloat(inputValue.join(''))
       console.log('V'+firtValue)
       inputValue = []
    }else if(firtValue !== 0){
        currentValue = parseFloat(inputValue.join(''))
        console.log('CV'+currentValue)
    }
    console.log(operator)

}

function events(){


    switch(operator){
        case '+':
            result = firtValue + parseFloat(inputValue.join(''))
        break

        case '-':
            result = firtValue - parseFloat(inputValue.join(''))
        break

        case 'X':
            result = firtValue * parseFloat(inputValue.join(''))
        break

        case '/':
            result = firtValue / parseFloat(inputValue.join(''))
        break

        default:
            result = 'erro'
    }

    
    display.value = result
    console.log(result)

    inputValue = []
    firtValue = result
    currentValue = parseFloat(display)
}

for (let i = 0; i < operationValue.length; i++) {
    operationValue[i].addEventListener('click', operatioClick);
}

let equalClick = document.getElementById('igual')
equalClick.addEventListener('click', events)

