const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);
console.log("BEFORE BREAKPOINT");
const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);
console.log("AFTER BREAKPOINT");
