// Keyword async added to a function automatically returns a promise
// async function hello() {

// }

// Keyword async can be called on arguments as well
// Keyword return represents a Promise resolve, while keyword throw represents a Promise reject
// const sing = async () => {
//   // throw "YOUR FILES ARE CORRUPT";
//   return "LA LA LA";
// };

// sing()
//   .then((data) => {
//     console.log("PROMISE RESOLVED WITH:", data);
//   })
//   .catch((err) => {
//     console.log("OH NO, PROMISE REJECTED!");
//     console.log(err);
//   });

// Faked server login
// const login = async (username, password) => {
//   if (!username || !password) throw "MISSING CREDENTIALS!";
//   if (password === "fantasybooksrule") return "WELCOME!";
//   throw "INVALID PASSWORD";
// };

// login("jebtrkabn", "fantasybooksrule")
//   .then((msg) => {
//     console.log("LOGIN SUCCESSFUL!");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("FAILED TO LOG IN!");
//     console.log(err);
//   });

// Refactored older callback lesson with Promise
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("indigo", 1000))
//   .then(() => delayedColorChange("violet", 1000));

// Refactored delayedColorChange with async
async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("violet", 1000);
  await delayedColorChange("purple", 1000);
  return "KALEIDOSCOPED!";
}

// Calling a then statement after async function rainbow
// rainbow().then(() => console.log("END OF RAINBOW!"));

// Calling an async function after async function rainbow to remove the then statement
async function printRainbow() {
  await rainbow();
  console.log("END OF RAINBOW!");
}

printRainbow();

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// async function to call fakeRequestPromise with a try catch included that will run trys until it catches an error in a rejected promise
async function makeTwoRequests() {
  try {
    let data1 = await fakeRequestPromise("/page1");
    console.log(data1);
    let data2 = await fakeRequestPromise("/page2");
    console.log(data2);
  } catch (e) {
    console.log("CAUGHT AN ERROR!");
    console.log("Error is:", e);
  }
}
