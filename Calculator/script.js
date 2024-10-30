function appendToDisplay(value) {
  const display = document.querySelector("#display");
  if (display.value === "0" && value !== ".") {
    display.value = value; // Replace initial 0
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.querySelector("#display").value = "0";
  display.style.color = "";
}

function backspace() {
  const display = document.querySelector("#display");
  display.value = display.value.slice(0, -1) || "0"; // Remove last character
}

function calculate() {
  const display = document.querySelector("#display");
  try {
    const result = new Function(
      '"use strict";return (' + display.value + ")"
    )();
    if (result === Infinity || result === -Infinity) {
      display.value = "Error!";
      display.style.color = "red";
      alert("Can't divide by zero");
    } else {
      display.value = result;
      display.style.color = "";
    }
  } catch (error) {
    display.value = "Error!";
    display.style.color = "red";
    alert("Error: Invalid input");
  }
}

/*
const result = new Function('"use strict";return (' + display.value + ')')();

  function() {
    "use strict";
    return 3 + 4; // (display.value = 3 + 4)
}
*/
