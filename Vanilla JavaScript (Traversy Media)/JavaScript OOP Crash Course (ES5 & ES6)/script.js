// const s1 = 'Hello';
// console.log(s1.toUpperCase());
// console.log(typeof s1); // this is a string

// const s2 = new String('Hello');
// console.log(typeof s2); // this is an object

// Different DOM objects
// console.log(window)
// window.alert(1);
// console.log(navigator.appVersion);

// Object literals
// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: 2023,
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };

// console.log(book1.getSummary());

// const book2 = {
//     title: 'Book Two',
//     author: 'Jane Doe',
//     year: 2016,
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };

// console.log(book2.getSummary());

// Turning the book object into an array
// console.log(Object.values(book1));
// console.log(Object.values(book2));

// console.log(Object.keys(book1));
// console.log(Object.keys(book2));

// Constructor for an object
// ES5
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // this.getSummary = () => {
    // return `${this.title} was written by ${this.author} in ${this.year}`;
    // }
}

// Instantiating an object
const book1 = new Book('Book One', 'John Doe', 2013);
const book2 = new Book('Book Two', 'Jane Doe', 2016);

// Prototype, another way of adding a funtion to Book objects
// getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// console.log(book1.getSummary());
// console.log(book2.getSummary());

// getAge
Book.prototype.getAge = function () {
    return `${this.title} is ${new Date().getFullYear() - this.year} years old`;
}

// console.log(book1.getAge());
// console.log(book2.getAge());

// Revise / Change Year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}

console.log(book2);
book2.revise(2019);
console.log(book2)