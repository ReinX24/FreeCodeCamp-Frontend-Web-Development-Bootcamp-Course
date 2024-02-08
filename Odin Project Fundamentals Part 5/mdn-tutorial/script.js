// Object basics 4
function Cat(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = function () {
        console.log(`Hello, said ${this.name} the ${this.breed}.`)
    }
}

const cat = new Cat('Bertie', 'Cymric', 'white');
const cat2 = new Cat('Garfield', 'Tabby', 'orange');

cat.greeting()
cat2.greeting()

// Object basics 3
// const cat = {
//     name: 'Bertie',
//     breed: 'Cymric',
//     color: 'white',
//     greeting: function () {
//         console.log(`Hello! said ${this.name} the ${this.breed}.`)
//     }
// }

// const cat2 = {
//     name: 'Garfield',
//     breed: 'Tabby',
//     color: 'orange',
//     greeting: function () {
//         console.log(`Hello! said ${this.name} the ${this.breed}.`)
//     }
// }

// cat.greeting()
// cat2.greeting()

// Object basics 2
// const bandInfo = {
//     name: "Ben and Ben",
//     nationality: "Filipino",
//     genre: "Pop",
//     members: 10,
//     split: false,
//     albums: [
//         { name: "Limasawa Street", released: 2019 },
//         { name: "Pebble House, Vol. 1: Kuwaderno", released: 2021 }
//     ],
// }

// bandInfo["biography"] =
//     `${bandInfo.name} is a ${bandInfo.nationality} band that mostly plays ${bandInfo.genre} music. 
// They have ${bandInfo.members} members and their split status is ${bandInfo.split}.
// Their albums are ${bandInfo.albums[0].name} which was released on ${bandInfo.albums[0].released}
// and ${bandInfo.albums[1].name} which was released on ${bandInfo.albums[1].released}.`;

// console.log(bandInfo);
// console.log(bandInfo.biography);

// Constructors
// function Person(name) {
//     this.name = name;
//     this.introductSelf = function () {
//         console.log(`Hi! I'm ${this.name}.`)
//     };
// }

// const salva = new Person('Salva');
// salva.introductSelf()
// const frankie = new Person('Frankie');
// frankie.introductSelf()

// const myNotification = new Notification("Hello")

// function createPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.introductSelf = function () {
//         console.log(`Hi! I'm ${this.name}.`);
//     };
//     return obj;
// }
// const salva = createPerson('Salva');
// salva.introductSelf();
// const frankie = createPerson('Frankie');
// frankie.introductSelf();

// const person = {
//     // name: ['Bob', 'Smith'],
//     name: {
//         first: 'Bob',
//         last: 'Smith'
//     },
//     age: 32,
//     bio() {
//         // console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
//         // console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`)
//         console.log(`${this['name']['first']} ${this['name']['last']} is ${this.age} years old.`)
//     },
//     introductSelf() {
//         // console.log(`Hi! I'm ${this.name.first}.`)
//         console.log(`Hi! I'm ${this['name']['last']}.`)
//     }
// }

// person.bio()
// person.introductSelf()

// function logProperty(propertyName) {
//     console.log(person[propertyName]);
// }
// logProperty("name");
// logProperty("age");

// Setting object members
// person.age = 45;
// person['name']['last'] = "Cratchit";
// console.log(person);

// Setting properties
// person['eyes'] = 'hazel';
// person.farewell = function () {
//     console.log('Bye everybody!');
// }
// console.log(person['eyes'])
// person.farewell()

// const myDataName = "height";
// const myDataValue = "1.75cm";
// person[myDataName] = myDataValue;

// console.log(person.height);