// new Promise((resolve, reject) => {

// });

// The basics of a created promise
// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand <= 0.7) {
//         resolve("FAKE DATA PACKETS");
//       }
//       reject("REQUEST ERROR!");
//     }, 1000);
//   });
// };

// fakeRequest("/books/1")
//   .then((data) => {
//     console.log("DONE WITH REQUEST!");
//     console.log("YOUR DATA IS:", data);
//   })
//   .catch((err) => {
//     console.log("OH NO, AN ERROR!", err);
//   });

// A variable taking several arguments for the same setTimeout function

// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// };

// Rewritten function to take the color change variable, still nested, but better refactored
// delayedColorChange("red", 1000, () => {
//   delayedColorChange("orange", 1000, () => {
//     delayedColorChange("yellow", 1000, () => {
//       delayedColorChange("green", 1000, () => {
//         delayedColorChange("blue", 1000, () => {
//           delayedColorChange("indigo", 1000, () => {
//             delayedColorChange("purple", 1000, () => {});
//           });
//         });
//       });
//     });
//   });
// });

// Refactored older callback lesson with Promise
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("blue", 1000))
  .then(() => delayedColorChange("indigo", 1000))
  .then(() => delayedColorChange("violet", 1000));
