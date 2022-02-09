document.querySelector("button").addEventListener("click", (event) => {
  console.log(event);
});

// An event listener that triggers when a key is pressed
// const input = document.querySelector("input");
// input.addEventListener("keydown", (e) => {
//   console.log(e.key);
//   console.log(e.code);
// });

// An event listener that triggers when a key comes back up
// input.addEventListener("keyup", () => {
//   console.log("KEYUP");
// });

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    default:
      console.log("IGNORED!");
  }
});
