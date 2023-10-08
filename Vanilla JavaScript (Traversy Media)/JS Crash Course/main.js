// console methods examples
// console.log('Hello World')
// console.error('This is an error')
// console.warn('This is a warning')

// let and const
// Note: as much as possible, use const by default instead of let 
// since it makes the code more secure
// let myAge = 30;
// myAge = 31;
// console.log("My age: " + myAge)

// Strings, Numbers, Boolean, null, undefined, Symbol

// const myName = 'Rein';
// const myAge = 20;
// const myRating = 4.5;
// const isCool = true;
// const myNull = null; // null means empty
// const myUndefined = undefined;
// let anotherUndefined; // this is considered as undefined

// Checking the types of our different variables
// console.log(typeof myName); // string
// console.log(typeof myAge); // number
// console.log(typeof myRating); // number
// console.log(typeof isCool); // boolean
// console.log(typeof myNull); // object
// console.log(typeof myUndefined); // undefined
// console.log(typeof anotherUndefined); // undefined

// Strings
// const myName = 'Rein';
// const myAge = 20;

// Concatenation
// Old method
// console.log('My name is ' + myName + ' and I am ' + myAge)

// New method ES6, template string or template literals
// const greetNameAndAge = `My name is ${myName} and I am ${myAge}`;
// console.log(greetNameAndAge)

// String properties and methods
const myMessage = 'Hello, World';
console.log(myMessage.length) // this is an attribute 
console.log(myMessage.toUpperCase()) // this is a method
console.log(myMessage.toLowerCase())