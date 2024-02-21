let buttons = document.querySelectorAll(
  "button[id='0'], button[id='1'], button[id='2'], button[id='3'], button[id='4'], button[id='5'], button[id='6'], button[id='7'], button[id='8'], button[id='9']"
);
//if id.target.innerText.length < 10 , aString += id.target.innerText;
buttons.forEach((button) => {
  button.addEventListener("click", (id) => {
    aString += id.target.innerText;
    console.log(aString);
  });
});

let aString = "";
let bString = "";

let a = 0;
let b = 0;
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}
