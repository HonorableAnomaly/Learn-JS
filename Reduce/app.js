const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// Finds the sum of the array

// let total = 0;
// for (let price of prices) {
//     total += price;
// };
// console.log(total);

// The sum of the array using the reduce method
// const total = prices.reduce ((total, price) => {
//     return total + price;
// })

// Same reduce method with implicit return
const total = prices.reduce ((total, price) => total + price);

// Using reduce method to find the lowest priced item in the array
const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

// Using reduce method to find the highest priced item in the array
const maxPrice = prices.reduce ((max, price) => {
    if (price > max) {
        return price;
    }
    return max;
})


const movies = [
    {
      title: "The Matrix",
      score: 93,
      year: 1999
    },
    {
      title: "Toy Story",
      score: 97,
      year: 1986
    },
    {
      title: "Finding Nemo",
      score: 86,
      year: 1938
    },
    {
      title: "Lord of the Rings",
      score: 99,
      year: 2006
    },
    {
      title: "Scream",
      score: 73,
      year: 2013
    },
    {
      title: "Love, Actually",
      score: 88,
      year: 1992
    },
];

// Using reduce method to find the best score of movies in the object array
const highestRated = movies.reduce ((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

// Using reduce method to find the worst score of movies in the object array
const lowestRated = movies.reduce ((worstMovie, currMovie) => {
    if (currMovie.score < worstMovie.score) {
         return currMovie;
    }
    return worstMovie;
})


const evens = [2, 4, 6, 8];
// Introducing a second argument after the implicit return that reduce is added to, serving as the initial value of the reduce
const added = evens.reduce ((sum, num) => sum + num, 100);