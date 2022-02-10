// Adding a function to the String prototype, because we can
String.prototype.yell = function () {
  return `WOW!!! ${this.toUpperCase()}!!!!! AAAGHGHG!!!!`;
};

Array.prototype.pop = function () {
  return "Sorry, I want that element. I will never pop it off!";
};
