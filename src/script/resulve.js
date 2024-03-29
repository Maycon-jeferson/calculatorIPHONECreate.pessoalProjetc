let firtValue = 0
let currentValue = 0
let result

let operationValue = document.getElementsByClassName('btnact');
function operatioClick(event) {
    let value = event.target.textContent;
    
    if(firtValue === 0){
       firtValue = parseFloat(inputValue)
       console.log('V'+firtValue)
       inputValue = []
    }else if(firtValue !== 0){
        currentValue = parseFloat(inputValue)
        console.log('CV'+currentValue)
    }
}

for (let i = 0; i < operationValue.length; i++) {
    operationValue[i].addEventListener('click', operatioClick);
}

let equalClick = document.getElementById('igual')
equalClick.addEventListener('click', function events(){
    result = firtValue + parseFloat(inputValue)
    display.value = result
    console.log(result)
})

equalClick.addEventListener('click', function onCurrent(){
    inputValue = []
    firtValue = result
    currentValue = parseFloat(inputValue)
})

