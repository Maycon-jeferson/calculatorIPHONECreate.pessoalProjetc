const display = document.getElementById("display");
let button = document.getElementsByClassName('btn');

let inputValue = []

function addInputValue(event) {
  let valueBtn = event.target.textContent;
  inputValue.push(valueBtn);

  if (inputValue.length > 9) {
    inputValue.splice(9);
  }
  display.value = inputValue.join('')
}


for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', addInputValue);
}

// let fontSize = 30; // tamanho inicial da fonte
//   display.style.fontSize = fontSize + 'px';
//   while (arrayTextos.length > 6) {
//     fontSize -= 10;
//     display.style.fontSize = fontSize + 'px';
//   }

// ---------------------------------------------------------------------------------------------------

const clean = document.getElementById("clean")
  clean.addEventListener('click', function ac(){
    firtValue = 0
    currentValue = 0
    result = 0
    inputValue = []
    display.value = 0
  })