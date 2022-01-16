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
    realm: 'Woodland',
    magic: 'Healing'
};

const user2 = {
    email: 'aragorn@gmail.com',
    password: 'Ar@g0rn',
    firstName: 'Aragorn',
    lastName: 'Elessar',
    born: 'TA 2931',
    died: 'FO 120',
    bio: 'Aragorn, son of Arathron, is the rightful King of Minas Tirith and the realm of men in Middle Earth',
    province: 'Minas Tirith',
    realm: 'Reunited Kingdom'
};

// Old way to pull out key-value pairs into a new variable
// const firstName = user.firstName;
// const lastName = user.lastName;
// const fullName = firstName + lastName;

// Destructuring allows us to copy specific key-value pairs in any order and assign them to new variables
// const {email, firstName, lastName, province, bio} = user;

// Renaming the variable as we copy it over into that new variable
// Default values provided in the new variable assignment do not overwrite existing key-value pair values
const {born: birthYear, died: deathYear = 45} = user;

// A default value can be given to the new variables as they are destructured in case there is no key-value pair present
const {province, realm, magic = 'N/A'} = user2;