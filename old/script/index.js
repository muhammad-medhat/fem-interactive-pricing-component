const prices = [
  { price: 8, package: "10K Page views" },
  { price: 12, package: "50K Page views" },
  { price: 16, package: "100K Page views" },
  { price: 24, package: "500k Page views" },
  { price: 36, package: "1M Page views" },
];
const slider = document.getElementById("slider");
const package = document.getElementById("packageDesc");
const priceDesk = document.querySelector(".price.desktop .num");
const priceMob = document.querySelector(".price.mob .num");

let isYearly = true;
const toggleYearly = document.getElementById("checkbox");

slider.addEventListener("input", () => {
  // console.log();
  updateValue(prices[slider.value]);
  // console.log("slider.value", slider.value);
  // console.log("slider", slider);

  const x = slider.value * 25;
  slider.style.backgroundImage = `linear-gradient(to right,
          hsl(174, 86%, 45%) 0%, hsl(174, 77%, 80%) ${x}%,
          hsl(223, 50%, 87%) 75%, hsl(174, 77%, 80%) 100%)`;
});
toggleYearly.addEventListener("change", () => {
  // debugger;
  isYearly = toggleYearly.checked;
  updateValue(prices[slider.value]);
});

function updateValue(val) {
  // debugger;
  priceDesk.innerHTML = isYearly ? val.price - val.price * 0.25 : val.price;
  priceMob.innerHTML = isYearly ? val.price - val.price * 0.25 : val.price;
  package.innerText = val.package;
}
