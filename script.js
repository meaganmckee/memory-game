"use strict";

const card = document.querySelectorAll(".card");
let cardArray = [];

const flipCard = (e) => {
  console.dir(e.target.parentNode.parentNode);
  if (
    e.target.parentNode.parentNode.classList.contains("card") &&
    cardArray.length <= 1
  ) {
    e.target.parentNode.parentNode.classList.toggle("flipCard");
    cardArray.push(e.target.parentNode.parentNode);
    console.log(cardArray);
    if (cardArray.length === 2) {
      if (
        cardArray[0].getAttribute("data-plant") ===
        cardArray[1].getAttribute("data-plant")
      ) {
        console.log("they're a match");
        cardArray = [];
      } else {
        console.log("they're not a match");
        cardArray = [];
        flipCard();
      }
    }
  }
};

const mainContainer = document.querySelector(".maincontainer");
mainContainer.addEventListener("click", flipCard);

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
