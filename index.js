let aString = "";
let bString = "";
let ekran = document.querySelector("#number");
let math = document.querySelector("#action");
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

//wszystko poniżej dzieje się po naciśnięciu przycisku
actions.forEach((button) => {
  button.addEventListener("click", (id) => {
    if (id.target.id === "AC") {
      math.innerHTML = "";
      aString = "";
      ekran.innerText = "0";
    }

    if (id.target.id === "plusMinus") {
      if (aString !== "") {
        const number = parseFloat(aString);
        const toggledNumber = -number;
        aString = toggledNumber.toString();
        ekran.innerText = aString;
      }
    }

    if (id.target.id === "procent") {
      if (aString !== "") {
        const number = parseFloat(aString);
        const toggledNumber = number / 100;
        aString = toggledNumber.toString();
        ekran.innerText = aString;
      }
    }
    let dzial = {};

    // niech zrobi obiekt z 2 parametrami aString i działanie;
    //wpisujesz liczbe, klikasz np. '/' i tworzy obiekt z aString i działaniem i resetuje ekran
    //a jak klikniesz '=' to zapisze to co na ekranie do bString
    // i wykona działanie bazując na wartości parametru 'działanie'
    if (id.target.id === "div") {
      if (aString !== "") {
        math.innerHTML = "/";
        dzial = {
          aString,
          dzialanie: "/",
        };
        return dzial;
      }
    }
    console.log(dzial);

    if (id.target.id === "multi") {
      if (aString !== "") {
        math.innerHTML = "*";
        aString = "";
        ekran.innerText = "0";
      }
    }

    if (id.target.id === "subs") {
      if (aString !== "") {
        math.innerHTML = "-";
        aString = "";
        ekran.innerText = "0";
      }
    }

    if (id.target.id === "add") {
      if (aString !== "") {
        math.innerHTML = "+";
        aString = "";
        ekran.innerText = "0";
      }
    }

    if (id.target.id === "dot") {
      if (aString !== "") {
        aString += ".";
        ekran.innerText = aString;
      }
    }

    if (id.target.id === "result") {
      if (aString !== "") {
        ekran.innerText = aString;
      }
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
