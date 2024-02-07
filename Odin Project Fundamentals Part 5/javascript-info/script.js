// Hello, object
// const user = {
//     name: "John",
//     surname: "Smith",
// }
// console.log(user)
// user.name = "Pete"
// console.log(user)
// delete user.name
// console.log(user)

// Ordered like an object
// const codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     "1": "USA",
// }
// for (const code in codes) {
//     console.log(code) // 1, 41, 44, 49
// }

// const user = {
//     name: "John",
//     surname: "Smith"
// };
// user.age = 25 // adding a property

// for (const prop in user) {
//     console.log(prop)
// }

// Making the keys in codes non integer values with the "+" sign
// const codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     "+1": "USA",
// }
// for (const code in codes) {
//     console.log(+code); // 49, 41, 44, 1
// }

// for...in loop
// const user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };
// Loops through key pairs and prints values
// for (key in user) {
//     console.log(key)
//     console.log(user[key])
// }

// Properly existence test, "in" operator
// const user = {};
// console.log(user.noSuchProperty == undefined) // true, property does not exist

// const user = { name: "John", age: 30 };
// console.log("age" in user) // true
// console.log("blabla" in user) // false
// const key = "age";
// console.log(key in user)

// Storing the undefined keyword
// const obj = {
//     test: undefined,
// }
// console.log(obj.test) // undefined
// console.log(obj.name) // undefined
// console.log("test" in obj) // true

// Property names limitations
// We can assign reserved words in objects
// const obj = {
//     for: 1,
//     let: 2,
//     return: 3
// }
// console.log(obj)

// const obj = {
//     0: "test"
// }
// console.log(obj["0"])
// console.log(obj[0])

// let obj = {}
// obj.__proto__ = 5;
// console.log(obj.__proto__) // prints an object

// Property value shorthand
// Function that returns an object
// function makeUser(name, age) {
// return {
//     name: name,
//     age: age,
// }
// Shorthand version
//     return {
//         name,
//         age,
//     }
// }
// const user = makeUser('John', 30);
// console.log(user)

// Computed properties
// const fruit = prompt("Which fruit to buy?", "apple");
// const bag = {
//     [fruit]: 5,
// }
// alert(bag.apple)

// const fruit = prompt('Which fruit to buy?', 'apple');
// const bag = {};
// bag[fruit] = 5;
// console.log(bag[fruit])

// const fruit = 'apple';
// const bag = {
//     [fruit + 'Computers']: 5,
// }
// console.log(bag)

// 2 ways of instantiating objects
// let user = new Object();
// let user = {};

// Adding key value pairs
// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true // multiword property name must be quoted
// }

// Adding a property
// user.isAdmin = true;

// Deleting a property 
// delete user.age;

// Accessing multiword properties
// console.log(user["likes birds"]);
// delete user["likes birds"];

// Accessing a key on runtime
// const key = prompt('What do you want to know about the user?', 'name');
// console.log(user[key])

// Dot notation
// console.log(user.name)