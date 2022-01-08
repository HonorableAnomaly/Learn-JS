// let totalEggs = 0;
// function collectEggs() {
//   let totalEggs = 6;
// }

// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = "Scarlet Macaw";
// function birdWatch() {
//   let bird = "Great Blue Heron";
//   console.log(bird);
// }

// birdWatch();

// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14159;
//   let msg = "Hiii!";
// }

// console.log(radius);
// console.log(msg);

// var can be used to access variables inside blocks, while let and const are block scoped
// for (let i = 0; i < 5; i++) {
//   let msg = "esdangtorewnbt";
//   console.log(msg);
// }
// console.log(msg);
// console.log(i);

// nested functions can be called outside to access it, multiple times
function bankRobbery() {
  const heroes = ["Spiderman", "Varian Wrynn", "Wonder Woman", "Hey Arnold!"];
  function cryForHelp() {
    //   variables inside a nested function are not accessible to the higher functions
    let color = purple;
    function inner() {
      for (let hero of heroes) {
        console.log(`Please help us, ${hero.toUpperCase()}!`);
      }
    }
    inner();
  }
  cryForHelp();
}
