const password = prompt("Enter your password");

if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("Password validated!");
} else {
  console.warn("Incorrect format for password");
}
