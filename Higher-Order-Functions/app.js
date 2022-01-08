// to call a function from a function, include it inside the function
function callTwice(func) {
  func();
  func();
}

function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

// to invoke functions, leave the parentheses off because we don't want a value initiated within the call
callTwice(rollDie);
