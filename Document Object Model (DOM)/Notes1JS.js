// const myObj = {
//     prop1: 'vandal',
//     prop2: {
//         nested: 'phantom'
//     }
// };

// Creating a p tag
// const elementNode = document.createElement('p');
// const textNode = document.createTextNode('Content');
// const attributeNode = document.createAttribute('class');

// elementNode.appendChild(textNode); // places Content between p tags
// attributeNode.value = "some-class"; // assigning class name
// elementNode.setAttributeNode(attributeNode); // places class name in p tags

// Inserting it in the document or HTML
// document.body.appendChild(elementNode);

// Selecting button
// const tagButton = document.querySelector('button'); // stores all button elements
// const idButton = document.querySelector('#btn-1'); // stores elements with id of btn-1
// const classButton = document.querySelector('.my-btn'); // stores elements with a class of my-btn

// Getting button using getElementById
// console.log(document.getElementById('btn-1')); // searches for a button with a certain id

// const btn = document.querySelector('#btn-1'); // storing button with id of btn-1
// const btn = document.querySelector(".my-btn"); // using button class

/*
function addParagraph() {
    const randomNum = Math.floor(Math.random() * 100); // random number between 0 - 99
    const pContent = 'The random number is: ' + randomNum; // storing string and number in a variable
    const newElement = document.createElement('p'); // creating a <p> element
    newElement.textContent = pContent; // setting the content of our <p> element
    document.body.appendChild(newElement); // adding <p> element with content to our body
}
*/

// btn.addEventListener('click', addParagraph); // registering an event to our button
// btn.onclick = addParagraph; // another way of registering a click event

const myList = document.querySelector('ul');
console.log(myList);
console.log(myList.nodeType); // prints noteType 1, check documentation for more info
console.log(myList.children) // childer of ul element, li elements