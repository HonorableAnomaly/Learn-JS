// Promisy version of fetching an API
// fetch("https://api.tvmaze.com/search/shows?q=girls")
//   .then((res) => {
//     console.log("RESPONSE, WAITING TO PARSE...", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("DATA PARSED", data);
//     console.log(data[0].score);
//   })
//   .catch((e) => {
//     console.log("OH NO! ERROR!", e);
//   });

// Using Axios to fetch APIs
// axios
//   .get("https://api.tvmaze.com/search/shows?q=girls")
//   .then((res) => {
//     console.log(res.data[0].score);
//   })
//   .catch((err) => {
//     console.log("OH NO! ERROR!", err);
//   });

// Using async and Axios to fetch APIs
// const fetchTopGirlsMovieRating = async () => {
//   try {
//     const res = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
//     console.log(res.data[0].score);
//   } catch (e) {
//     console.log("ERROR!", e);
//   }
// };

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

// My code to try to remove LI once an error is detected
// const removeError = async () => {
//   jokes.remove(newLI);
// };

const getDadJoke = async () => {
  try {
    // This API requires the addition of a header like below. This is not always necessary for all APIs, but is for this one
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);
