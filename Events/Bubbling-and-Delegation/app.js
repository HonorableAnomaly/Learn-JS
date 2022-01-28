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

// Form events code from the grocery list lesson to demo delegation
const form = document.querySelector("form");
const product = document.querySelector("#product");
const qty = document.querySelector("#qty");
const list = document.querySelector("#list");

// Added for the remove li event listener

// Only works for any li that are in place already, not those that are added on the page, because the page isn't refreshing
// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", () => {
//     li.remove();
//   });
// }

// Adding a target on the nodeName ensures that what was clicked was a target that was intended rather than another node or element
list.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.remove();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const productName = product.value;
  const qtyAmount = qty.value;
  const newItem = document.createElement("li");
  newItem.innerText = `${qtyAmount} ${productName}`;
  //   list.insertAdjacentElement(beforeend, newItem);
  //   list.parentElement.appendChild(newItem);
  list.append(newItem);
  product.value = "";
  qty.value = "";
});
