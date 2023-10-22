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
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;

// this.getSummary = () => {
// return `${this.title} was written by ${this.author} in ${this.year}`;
// }
// }

// Instantiating an object
// const book1 = new Book('Book One', 'John Doe', 2013);
// const book2 = new Book('Book Two', 'Jane Doe', 2016);

// Prototype, another way of adding a funtion to Book objects
// getSummary
// Book.prototype.getSummary = function () {
// return `${this.title} was written by ${this.author} in ${this.year}`;
// }

// console.log(book1.getSummary());
// console.log(book2.getSummary());

// getAge
// Book.prototype.getAge = function () {
// return `${this.title} is ${new Date().getFullYear() - this.year} years old`;
// }

// console.log(book1.getAge());
// console.log(book2.getAge());

// Revise / Change Year
// Book.prototype.revise = function (newYear) {
// this.year = newYear;
// this.revised = true;
// }

// console.log(book2);
// book2.revise(2019);
// console.log(book2);

// Inheritance
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// Book.prototype.getSummary = function () {
// return `${this.title} was written by ${this.author} in ${this.year}.`;
// }

// Magazine object that will inherit the properties of the Book
// function Magazine(title, author, year, month) {
// Book.call(this, title, author, year); // calling the constructor of Book class
// this.month = month;
// }

// Inherit Prototype, must be above instantiation
// Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
// const magazineOne = new Magazine('Magazine One', 'John Doe', 2018, 'Jan');

// Using Magazine constructor
// Magazine.prototype.constructor = Magazine;

// console.log(magazineOne);
// console.log(magazineOne.getSummary());

// Object of Protos
// const bookProtos = {
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     },
//     getAge: function () {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }
// };

// Create Object 
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = 2013;
// console.log(book1);

// Another way of creating an object
// const book1 = Object.create(bookProtos, {
//     title: { value: 'Book One' },
//     author: { value: 'John Doe' },
//     year: { value: 2013 }
// });

// ES6 Classes
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Barnes & Noble';
    }
}

// Instantiate Object
// const book1 = new Book('Book One', 'John Doe', 2013);
// console.log(book1.getSummary());
// console.log(book1.getAge());
// console.log(book1);
// book1.revise(2018);
// console.log(book1);
// console.log(Book.topBookStore());

// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year); // parent constructor from Book class
        this.month = month;
    }
}

// Instantiate Magazine
const magazineOne = new Magazine('Magazine One', 'John Doe', 2020, 'Oct');
console.log(magazineOne.getSummary());