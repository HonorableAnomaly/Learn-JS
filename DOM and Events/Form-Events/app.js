// const form = document.querySelector("#shelterForm");
// const input = document.querySelector("#turtleName");
// const list = document.querySelector("#turtles");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const turtleName = input.value;
//   const newTurtle = document.createElement("li");
//   newTurtle.innerText = turtleName;
//   list.append(newTurtle);
//   input.value = "";
// });

const form = document.querySelector("form");
const product = document.querySelector("#product");
const qty = document.querySelector("#qty");
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const productName = product.value;
  const qtyAmount = qty.value;
  const newItem = document.createElement("li");
  newItem.innerText = `${qtyAmount} ${productName}`;
  list.insertAdjacentElement(beforeend, newItem);
  //   list.parentElement.appendChild(newItem);
  //   list.append(newItem);
  product.value = "";
  qty.value = "";
});
