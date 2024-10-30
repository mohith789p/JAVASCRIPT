const time = document.querySelector("#time");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const display = document.querySelector("#display");

let myCountDown;
let seconds = 0;

start.addEventListener("click", () => {
  clearInterval(myCountDown);
  seconds = parseInt(time.value, 10);

  myCountDown = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(myCountDown);
      display.style.color = "red";
      display.textContent = "Time's Up!";
    } else {
      display.style.color = "chartreuse";
      const minutes = Math.floor(seconds / 60);
      const remSeconds = seconds % 60;
      display.textContent =
        (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (remSeconds < 10 ? "0" : "") +
        remSeconds;
      seconds--;
    }
  }, 1000);
});

reset.addEventListener("click", () => {
  clearInterval(myCountDown);
  seconds = 0;
  display.textContent = "00:00";
  time.value = "";
});
