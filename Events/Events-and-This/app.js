// Random rgb color generator
const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

// Short for loops that utilize addEventListeners that call functions calling functions
const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", colorize);
}

const h1s = document.querySelectorAll("h1");

for (let h1 of h1s) {
  h1.addEventListener("click", colorize);
}

// Takes const variable makeRandColor and uses is to change the color of keyword this for background and text color.
function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}
