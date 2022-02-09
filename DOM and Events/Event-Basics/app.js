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

const btn3 = document.querySelector("#v3");

// addEventListener allows us to plug in whatever event we want
btn3.addEventListener("click", () => {
  alert("CLICKED!");
});

// A function can be added instead of calling an inline
btn3.addEventListener("click", scream);

function twist() {
  console.log("TWIST");
}

function shout() {
  console.log("SHOUT");
}

const tasButton = document.querySelector("#tas");

// These cannot be used together, because just like any property and value, it gets overwritten by the code after it. This is why addEventListener is superior.
// tasButton.onclick = twist;
// tasButton.onclick = shout;

// addEventListeners used together on the same property.
// once is used here to make the twist function listener event available only the first time, while retaining the second listener.
tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout);
