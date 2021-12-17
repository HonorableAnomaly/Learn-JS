// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Password validated!");
// } else {
//   console.warn("Incorrect format for password");
// }

const age = -10;

if ((age > 0 && age <= 5) || age >= 65) {
  console.log("FREE!");
} else if (age > 5 && age <= 10) {
  console.log("$10");
} else if (age > 10 && age < 65) {
  console.log("$20");
} else {
  console.warn("INVALID AGE");
}
