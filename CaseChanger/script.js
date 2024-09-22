function uppercase() {
  let text = document.querySelector("input").value;
  let result = text.toUpperCase();
  document.querySelector("#result").innerHTML = result;
}

function lowercase() {
  let text = document.querySelector("input").value;
  let result = text.toLowerCase();
  document.querySelector("#result").innerHTML = result;
}
function capital() {
  let text = document.querySelector("input").value;
  let result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  document.querySelector("#result").innerHTML = result;
}
function eachCapital() {
  let text = document.querySelector("input").value;
  let result = text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  document.querySelector("#result").innerHTML = result;
}
