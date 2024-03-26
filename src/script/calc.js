let firstValue = '';
let secondValue = '';

let value = document.getElementsByClassName('btnact');
let operationValue = operatioClick

function operatioClick(event) {
    let operationValue = event.target.textContent;
    let result
    
    if (firstValue === ''){
        firstValue = parseFloat(inputValue);
        inputValue = []
        display.value = 0
        console.log('1 ='+firstValue)
    }else{
        secondValue = parseFloat(inputValue);
        result = firstValue += secondValue
        firstValue = secondValue
        inputValue =[]
        display.value = result
        console.log(result)
    }
    
    if(firstValue === secondValue){
        firstValue = result
        console.log(result)
    }
}

for (let i = 0; i < value.length; i++) {
    value[i].addEventListener('click', operatioClick);
}