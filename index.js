let aString = "";
let bString = "";
let ekran = document.querySelector("#number");
let buttons = document.querySelectorAll(
  "button[id='0'], button[id='1'], button[id='2'], button[id='3'], button[id='4'], button[id='5'], button[id='6'], button[id='7'], button[id='8'], button[id='9']"
);

let actions = document.querySelectorAll(
  "button[id='AC'], button[id='plusMinus'], button[id='procent'], button[id='div'], button[id='multi'], button[id='subs'], button[id='add'], button[id='dot'], button[id='result']"
);

buttons.forEach((button) => {
  button.addEventListener("click", (id) => {
    if (aString.length < 10) {
      aString += id.target.innerText;
    }
    ekran.innerText = aString;
  });
});

actions.forEach((button) => {
  button.addEventListener("click", (id) => {
    if (id.target.id == "AC") {
      aString = "";
      ekran.innerText = "0";
    }
  });
});

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
