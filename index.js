let aString = "";
let ekran = document.querySelector("#number");
let math = document.querySelector("#action");
let buttons = document.querySelectorAll(
  "button[id='0'], button[id='1'], button[id='2'], button[id='3'], button[id='4'], button[id='5'], button[id='6'], button[id='7'], button[id='8'], button[id='9']"
);

let actions = document.querySelectorAll(
  "button[id='AC'], button[id='plusMinus'], button[id='procent'], button[id='div'], button[id='multi'], button[id='subs'], button[id='add'], button[id='dot'], button[id='result']"
);

let dzial = {};

buttons.forEach((button) => {
  button.addEventListener("click", (id) => {
    if (aString.length < 10) {
      if (ekran.innerText !== "ERROR" && ekran.innerText != "NaN") {
        aString += id.target.innerText;
      } else {
        aString = "";
      }
    }
    ekran.innerText = aString;
  });
});

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
        if (aString.length <= 10) {
          ekran.innerText = aString;
        } else {
          let digitsAfterDecimal =
            10 - Math.floor(Math.log10(Math.abs(aString))) - 1;
          let roundedNumber = aString.toFixed(digitsAfterDecimal);
          ekran.innerText = parseFloat(roundedNumber);
        }
      }
    }

    if (id.target.id === "div") {
      if (aString !== "") {
        math.innerHTML = "/";
        obj(aString, "/");
        aString = "";
      }
    }

    if (id.target.id === "multi") {
      if (aString !== "") {
        math.innerHTML = "*";
        obj(aString, "*");
        aString = "";
      }
    }

    if (id.target.id === "subs") {
      if (aString !== "") {
        math.innerHTML = "-";
        obj(aString, "-");
        aString = "";
      }
    }

    if (id.target.id === "add") {
      if (aString !== "") {
        math.innerHTML = "+";
        obj(aString, "+");
        aString = "";
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
        math.innerHTML = "=";
        wynik();
        aString = ekran.innerText;
      }
    }
  });
});

function obj(a, b) {
  (dzial.liczba = a), (dzial.dzialanie = b);
}

function wynik() {
  let liczbaa = Number(dzial.liczba);
  let liczba = Number(aString);
  let wynik;
  switch (dzial.dzialanie) {
    case "+":
      wynik = liczbaa + liczba;
      break;
    case "-":
      wynik = liczbaa - liczba;
      break;
    case "*":
      wynik = liczbaa * liczba;
      break;
    case "/":
      if (liczba === 0) {
        wynik = "ERROR";
      } else wynik = liczbaa / liczba;
      break;
  }
  if (wynik.length <= 10) {
    ekran.innerText = wynik;
    return wynik;
  } else {
    let digitsAfterDecimal = 10 - Math.floor(Math.log10(Math.abs(wynik))) - 1;
    let roundedNumber = wynik.toFixed(digitsAfterDecimal);
    ekran.innerText = parseFloat(roundedNumber);
    return parseFloat(roundedNumber);
  }
}
