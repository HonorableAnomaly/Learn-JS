const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// The old way to pull each score incrementally
const highScore = scores[0];
const secondHighestScore = scores[1];

// This syntax copies over the elements from scores in order into an array of new variables by destructuring
// Adding the rest param allows for destructuring of the rest of he elements
const [gold, silver, bronze, ...everyoneElse] = scores;


const user = {
    email: 'legolas@gmail.com',
    password: 'L3g0l@s',
    firstName: 'Legolas',
    lastName: 'Greenleaf',
    born: 'TA 87',
    died: 'FO 120',
    bio: 'Legolas Greenleaf is the elf prince of the Woodland Realm in Middle Earth',
    province: 'Ithilien',
    realm: 'Woodland'
};