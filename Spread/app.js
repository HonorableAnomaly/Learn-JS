const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

// Combining array elements using spread
const allPets = [...cats, ...dogs];

// Combining objects using spread
// If there is a conflict with duplicate key-value pairs, the first listed argument gets added and not the others, unless added as an additional argument in the new variable creation
const feline = {legs: 4, family: 'felidae'};
const canine = {isFurry: true, family: 'caninae'};


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = {...dataFromForm, id: 2345, isAdmin: false};