const display = document.getElementById("display");
let button = document.getElementsByClassName('btn');

let inputValue = []

function addInputValue(event) {
  let valueBtn = event.target.textContent;
  inputValue.push(valueBtn);

  if (inputValue.length > 9) {
    inputValue.splice(9);
  }
  display.value = parseFloat(inputValue.join(''))

  console.log(display.value)
}


for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', addInputValue);
}