// Try/catch is used to isolate blocks of code that we anticipate to not work, and it still allows the rest of the code to run if it breaks
// try {
//   hello.toUpperCase();
// } catch {
//   console.log("ERROR!!!");
// }

// hello.toUpperCase();
// console.log("AFTER!");

// 'e' catches the exception in the error, and the error can be printed in the console as 'e'
function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log("PLEASE TRY A STRING NEXT TIME!");
  }
}
