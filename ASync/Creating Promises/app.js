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
