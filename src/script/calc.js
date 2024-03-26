let firstValue = '';
let secondValue = '';

let value = document.getElementsByClassName('btnact');
let operationValue = operatioClick

function operatioClick(event) {
    let operationValue = event.target.textContent;
    let result
    let operator = operationValue
    
    
    if (firstValue === ''){
        firstValue = parseFloat((inputValue.join('')));
        inputValue = []
        display.value = 0
    }else{
        secondValue = parseFloat((inputValue.join('')));

        switch(operator){
            case '+':
                result = firstValue + secondValue;
                break;
            case '-':
                result = firstValue - secondValue;
                break;
            case 'X':
                result = firstValue * secondValue;
                break;
            case '/':
                result = firstValue / secondValue;
                break;
            default:
                result = "Nam"
        }

        firstValue = secondValue
        inputValue =[]        
    }
    
    if(firstValue === secondValue){
        firstValue = result
        display.value = result
    }

    console.log(operator)
}

for (let i = 0; i < value.length; i++) {
    value[i].addEventListener('click', operatioClick);
}