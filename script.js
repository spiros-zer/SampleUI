const hitBtn = document.querySelector(".btn");
const hBar = document.querySelector(".bar-frame");
const bar = document.querySelector(".bar");

hitBtn.addEventListener("click", function (e) {
  e.preventDefault;

  const total = document.querySelector("data-total");
  const value = document.querySelector("data-value");

  // max damage is essentially quarter of max life
  const damage = Math.floor(Math.random() * total);
  // damage = 100;
  const newValue = value - damage;
  // calculate the percentage of the total width
  const barWidth = (newValue / total) * 100;

  console.log(barWidth);

  bar.style.width = "50%";
});
