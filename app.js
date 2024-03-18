// const increment = document.querySelector("#increment");
// const decrement = document.querySelector("#decrement");
// const counter = document.querySelector("#counter");
// counter.style.color = "gold";

// function changeColor() {
//   if (number > 0) {
//     counter.style.color = "green";
//   } else if (number < 0) {
//     counter.style.color = "red";
//   } else {
//     counter.style.color = "gold";
//     const music = new Audio("./music/button-124476.mp3");
//     music.play();
//   }
// }

// let number = 0;
// increment.addEventListener("click", () => {
//   number++;
//   counter.textContent = number;
//   changeColor();
//   const music = new Audio("./music/mouse-click-153941.mp3");
//   music.play();
// });

// decrement.addEventListener("click", () => {
//   number--;
//   counter.textContent = number;
//   changeColor();
//   const music = new Audio("./music/tap-notification-180637.mp3");
//   music.play();
// });

// const inputEl = document.querySelector("input");
// const pEl = document.querySelector("pEl");

// inputEl.addEventListener("input", () => {
//   console.log(inputEl.value);
//   document.body.style.backgroundColor = inputEl.value;
// });

const form = document.querySelector("form");
const input = document.querySelector("input");
const ol = document.querySelector("ol");
const clearAll = document.querySelector("#clear-all");

clearAll.addEventListener("click", () => {
  ol.innerHTML = "";
  const music = new Audio("./music/clear.mp3").play();
});

form.addEventListener("submit", (a) => {
  a.preventDefault();
  ol.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
  const music = new Audio("./music/tap-notification-180637.mp3");
  music.play();
});

input.addEventListener("input", () => {
  const music = new Audio("./music/type.mp3").play();
});
