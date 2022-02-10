// Adding a function to the String prototype, because we can
// String.prototype.yell = function () {
//   return `WOW!!! ${this.toUpperCase()}!!!!! AAAGHGHG!!!!`;
// };

// Array.prototype.pop = function () {
//   return "Sorry, I want that element. I will never pop it off!";
// };

// Colt's color class constructor object
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");
const navColor = new Color("carrot", [230, 126, 34]);
const logoColor = new Color("emerald", [46, 204, 113]);

// Color types
// ("rgb(230, 34, 87)");
// ("rgba(176, 52, 208, .3)");
// ("#43FF0A");
// ("hsl(29, 50%, 50%)");

// Converts rgb colors to hex colors
function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Example of a hex that was produced from the rgb input
// ("#cd1c76");
// ("rgb(205, 28, 118)");

// Built the color factory function that can convert rgb or hex into the other
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

const firstColor = makeColor(35, 255, 150);
// It worked!
// #23ff96
