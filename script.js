"use strict";

const card = document.querySelectorAll(".card");
console.log(card);
for (let i = 0; i < 12; i++) {
  card[i].addEventListener("click", flipCard);
  function flipCard() {
    card[i].classList.toggle("flipCard");
  }
}

let time = 60;
let timer = null;
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");

const startTimer = () => {
  time = 60;
  timer = setInterval(() => {
    start.innerHTML = time;
    time--;
    if (time === 0) {
      clearInterval(timer);
    }
  }, 1000);
};

start.addEventListener("click", () => {
  startTimer();
});

reset.addEventListener("click", () => {
  clearInterval(timer);
  startTimer();
});
