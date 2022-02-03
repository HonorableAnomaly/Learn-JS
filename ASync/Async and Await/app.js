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
const login = async (username, password) => {
  if (!username || !password) throw "MISSING CREDENTIALS!";
  if (password === "fantasybooksrule") return "WELCOME!";
  throw "INVALID PASSWORD";
};

login("jebtrkabn", "fantasybooksrule")
  .then((msg) => {
    console.log("LOGIN SUCCESSFUL!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("FAILED TO LOG IN!");
    console.log(err);
  });
