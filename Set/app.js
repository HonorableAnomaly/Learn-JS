// console.log("HELLO!!!");

// // setTimeout adds a delay to the function before it executes
// setTimeout (() => {
//     console.log("...are you still there?");
// }, 3000);

// console.log("GOODBYE!!!");

// same syntax footprint as setTimeout, but executes once every interval
const id = setInterval (() => {
    console.log(Math.random());
}, 2000);

// typing clearInterval will stop the interval from running
// clearInterval(id);