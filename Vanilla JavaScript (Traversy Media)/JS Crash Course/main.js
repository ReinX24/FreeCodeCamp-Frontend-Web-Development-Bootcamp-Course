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
// const myMessage = 'Hello, World';
// console.log(myMessage.length) // this is an attribute 
// console.log(myMessage.toUpperCase()) // this is a method
// console.log(myMessage.toLowerCase())
// console.log(myMessage.substring(0, 5).toUpperCase()) // prints HELLO
// console.log(myMessage.split('')) // turns the string into an array of characters

// const myString = 'Java, Python, JavaScript, Rust';
// console.log(myString.split(','))

// Arrays in JavaScript: variables that hold multiple values
// const myFruits = ['Apples', 'Oranges', 'Pears'];
// console.log(myFruits)
// console.log(myFruits[1])

// We can add elements to the array but we cannot reassign array
// myFruits[3] = 'Grapes';
// myFruits = []; // throws an error
// myFruits.push('Mangoes'); // adds element to the end of the array
// myFruits.unshift('Strawberries'); // adds element to the start of the array
// myFruits.pop(); // removes the last element in the array
// console.log(myFruits)
// console.log(Array.isArray(myFruits))
// console.log(myFruits.indexOf('Oranges')) // 2

// Object Literals
// const Person = {
//     firstName: 'Rein',
//     lastName: 'Solis',
//     personAge: 20,
//     personHobbies: ['Programming', 'Reading', 'Gaming'],
//     personAddress: {
//         addressStreet: '123 Sun Street',
//         addressCity: 'Lego City',
//         addressCountry: 'Philippines'
//     }
// }

// Getting Person object's firstName and lastName
// const { firstName, lastName, personAddress: { addressCity } } = Person;
// console.log(addressCity)

// Person.personEmail = 'rein@gmail.com'
// console.log(Person)

// Arrays of objects
// const todosList = [
//     {
//         id: 1,
//         text: 'Learn Web Development',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Review Object Oriented Programming',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Review Data Structures and Algorithms',
//         isCompleted: false
//     },
// ]

// console.log(todosList) // prints todosList array of objects
// console.log(todosList[1].text) // prints Review Object Oriented Programming

// Converting Array of object to JSON
// const todosJSON = JSON.stringify(todosList);
// console.log(todosJSON)

// For loops
// for (let i = 0; i <= 10; i++) {
// console.log(`For Loop Number: ${i}`)
// }

// While loops
// let i = 0;
// while (i <= 10) {
// console.log(`While Loop Number: ${i}`)
// i++;
// }

// Looping through an array using a for loop
// for (let i = 0; i < todosList.length; i++) {
// console.log(todosList[i])
// console.log(`TODO: ${todosList[i].text}`)
// }

// for of loop
// for (let eachTodo of todosList) {
// console.log(`TODO: ${eachTodo.text}`)
// }

// forEach, map, filter
// forEach, takes a function that applies to each array element
// each element is stores in eachTodo
// todosList.forEach(function (eachTodo) {
// console.log(eachTodo.text)
// });

// map, returns a new array
// const todosText = todosList.map(function (eachTodo) {
// return eachTodo.text;
// });

// console.log(todosText)

// const todosIds = todosList.map((eachTodo) => {
// return eachTodo.id;
// })

// console.log(todosIds)

// filter, returns elements that satisfies a certain condition
// const todosCompleted = todosList.filter(function (eachTodo) {
// return eachTodo.isCompleted === true; // get Objects that have isCompleted as true
// }).map(function (eachTodo) {
// return eachTodo.text; // get the Objects' text property
// });

// console.log(todosCompleted)

// const x = 6;
// const y = 20;
// if (x > 5 && y > 10) {
// console.log('x is more than 5 and y is more than 10')
// } 

// Ternary operator
// const x = 10;
// const color = x > 10 ? 'teal' : 'orange';
// const color = 'red';

// switch (color) {
//     case 'teal':
//         console.log('The color is teal')
//         break;
//     case 'orange':
//         console.log('The color is orange')
//         break;
//     default:
//         console.log('Color is not teal or orange')
//         break;
// }

// functions
// function addNums(numOne, numTwo) {
// return numOne + numTwo
// }

// Arrow function in javascript
// const addNums = (numOne, numTwo) => numOne + numTwo;

// console.log(addNums(5, 5))
// console.log(addNums())  // NaN, not a number

// Creating a constructor for our Person object
// function Person(firstName, lastName, dateOfBirth) {
// this.firstName = firstName;
// this.lastName = lastName;
// this.dateOfBirth = new Date(dateOfBirth); // converts it to a Date object

// Functions for our Person class
// this.getBirthYear = () => {
// return this.dateOfBirth.getFullYear();
// }

// this.getFullName = () => {
//     return `${this.firstName} ${this.lastName}`;
// }
// }

// How to properly add methods to our Person objects
// Person.prototype.getBirthYear = function () {
// return this.dateOfBirth.getFullYear();
// }

// Person.prototype.getFullName = function () {
// return `${this.firstName} ${this.lastName}`;
// }

// Instantiating our Person object
// const personOne = new Person('Rein', 'Solis', '08/24/2003');
// const personTwo = new Person('Rae', 'Sanchez', '10/15/2002');

// console.log(personOne.dateOfBirth.getFullYear())
// console.log(personTwo)

// console.log(personOne.getBirthYear())
// console.log(personTwo.getBirthYear())

// console.log(personOne.getFullName())
// console.log(personTwo.getFullName())

// ES6 Classes
// class Person {

//     constructor(firstName, lastName, dateOfBirth) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dateOfBirth = new Date(dateOfBirth);
//     }

//     getBirthYear() {
//         return this.dateOfBirth.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

// }

// const personOne = new Person('Rein', 'Solis', '08/24/2003');
// const personTwo = new Person('Rae', 'Sanchez', '10/15/2002');

// console.log(personOne.getFullName())
// console.log(personTwo.getFullName())

// console.log(personOne.getBirthYear())
// console.log(personTwo.getBirthYear())

// Single element selector
// const form = document.getElementById('my-form');
// console.log(document.querySelector('h1'))

// Multiple element selector
// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('li'))

// const items = document.querySelectorAll('.item');
// items.forEach((eachItem) => {
// console.log(eachItem)
// })

// const ul = document.querySelector('.items');
// ul.remove(); // removes the entire element and its children
// ul.lastElementChild.remove(); // removes the last child element in ul
// ul.firstElementChild.remove(); // removes the first element in ul
// ul.firstElementChild.textContent = 'Hello'; // replaces text in the first child element
// ul.children[1].innerText = 'Rein'; // selecting an element at a certain index and replacing text
// ul.lastElementChild.innerHTML = '<h2>Hello</h2>' // adding HTML to an element

// const button = document.querySelector('.button');
// button.style.background = 'red'; // selecting an attribute of an element

const button = document.querySelector('.button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target); // prints the element where the event listener is added
});