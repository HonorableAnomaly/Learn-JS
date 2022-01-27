const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// Fires when the input is different when you blur (click away)
// input.addEventListener("change", () => {
//   console.log("CHANGED!");
// });

// Fires when what is entered in the input changes, at moment of change
input.addEventListener("input", (e) => {
  h1.innerText = input.value;
});
