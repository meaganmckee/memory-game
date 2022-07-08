"use strict";

const card = document.querySelectorAll(".card");
console.log(card);
for (let i = 0; i < 12; i++) {
  card[i].addEventListener("click", flipCard);
  function flipCard() {
    card[i].classList.toggle("flipCard");
  }
}
