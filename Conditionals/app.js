// Random number generator between 0 and 1, not including those numbers, using if and else statements

// let random = Math.random();
// if (random <= 0.5) {
//   console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
// } else {
//   console.log("YOUR NUMBER IS GREATER THAN 0.5!!!");
// }
// console.log(random);

// Day of the week finder to print opinions of days, entered via user prompt, using if, else if and else statements

// const dayOfWeek = prompt("ENTER A DAY").toLowerCase();

// if (dayOfWeek === "monday") {
//   console.log("UGHHH I HATE MONDAYS!");
// } else if (dayOfWeek === "saturday") {
//   console.log("YAY I LOVE SATURDAYS!");
// } else if (dayOfWeek === "friday") {
//   console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
// } else {
//   console.log("WHY IS IT THIS DAY??!");
// }

// Age finder to print ticket prices using if, else if and else statements

// const age = 89;

// if (age < 5) {
//   console.log("You are a baby. You get in for free.");
// } else if (age < 10) {
//   console.log("You are a child. Gimme your chore monies.");
// } else if (age < 65) {
//   console.log("You are an adult. Your paycheck is mine.");
// } else {
//   console.log("You are a senior. You get an old discount!");
// }

const password = prompt("Please enter a new password");

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Password validated!");
  } else {
    console.warn("Password cannot contain spaces.");
  }
} else {
  console.warn("Password too short. Must contain at least 6 characters.");
}
