// An onclick function for a button
const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("YOU CLICKED ME!!!");
  console.log("I HOPE IT WORKED!!!");
};

// An onmouseenter function for a button
function scream() {
  console.log("AAAAAHHHHH!!");
  console.log("STOP TOUCHING ME!!!");
}

btn.onmouseenter = scream;

// An onclick function for the h1
document.querySelector("h1").onclick = () => {
  alert("You clicked the H1!");
};
