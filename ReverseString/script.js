// function reverseString() {
//   const inputValue = document.querySelector("input").value;
//   const reversed = inputValue.split("").reverse().join("");
//   document.querySelector("#result").textContent = reversed;
// }

function reverseString() {
  const inputValue = document.querySelector("input").value;
  let reversed = "";
  for (let i = inputValue.length - 1; i >= 0; i--) {
    reversed += inputValue[i];
  }
  document.querySelector("#result").textContent = reversed;
}
