const container = document.querySelector("#container");
const button = document.querySelector("#changer");

// Having both of these event listeners causes event bubbling because the button is inside the div, so the background color changes and then it hides
button.addEventListener("click", (e) => {
  container.style.backgroundColor = makeRandColor();
  e.stopPropagation();
});

container.addEventListener("click", () => {
  container.classList.toggle("hide");
});

// Random rgb color generator
const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
