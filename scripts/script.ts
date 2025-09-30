// introduction to typescript
const message: string = "Hello, TypeScript!";
console.log(message);


// union types
let var2: number | string = 42;
var2 = "aboba";
console.log(var2);


// union literal types
let var3: 'moto' | 'coche' = 'moto';
var3 = 'coche';
var3 = 'moto';
// var3 = 'bicicleta'; // Error
console.log(var3);


// array types
const hobbie: string[] = ['Sports', 'Cooking', 'Traveling'];
console.log(hobbie);
const hobbieExtra = ['Dancing', 'Singing'];
console.log(hobbie);
hobbie.push(...hobbieExtra);
console.log(hobbie);

const hobbies: string[] = ['correr', 'pintar', 'cantar'];
const hobbiesExtra = ['ballar', 'nadar'];
const hobbies2 = hobbies; // reference to the same array
const hobbies3 = [...hobbies]; // new array with the same elements
hobbies.push(...hobbiesExtra);
console.log('hobbies2', hobbies2);
console.log('hobbies3', hobbies3);

// tuple types
const books: [string, string] = ['The Great Gatsby', 'F. Scott Fitzgerald'];
// const books: [string, string] = ['Gatsby', 'Fitzgerald', 'Karenina']; // Error, we have only two elements in definition
console.log(books);





