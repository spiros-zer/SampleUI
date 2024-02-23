const hitBtn = document.querySelectorAll(".btn");
const hBar = document.querySelectorAll(".bar-frame");
const bar = document.querySelectorAll(".bar");

const total = 100;
const value = 100;

// Left button - Change randomly value between 0-100
hitBtn[0].addEventListener("click", function (e) {
  e.preventDefault;

  // max damage is essentially quarter of max life
  const damage = Math.floor(Math.random() * total);
  // damage = 100;
  const newValue = value - damage;
  // calculate the percentage of the total width
  const barWidth = (newValue / total) * 100;

  bar[0].style.width = `${barWidth}%`;
  bar[1].style.width = `${barWidth}%`;
});

// Right button - Resets value to 100%
hitBtn[1].addEventListener("click", function () {
  bar[0].style.width = "100%";
  bar[1].style.width = "100%";
});
