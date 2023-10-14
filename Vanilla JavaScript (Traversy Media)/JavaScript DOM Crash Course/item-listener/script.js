// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain)
// console.log(document.URL)
// console.log(document)
// console.log(document.title)
// document.title = 123;
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all) // deprecated, does not work anymore
// console.log(document.all[8])
// document.all[8].textContent = 'Hello';
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let mainHeader = document.getElementById('main-header');

// textContent, shows hidden text
// headerTitle.textContent = 'Hello';
// console.log(headerTitle.textContent);

// innerText, does not show hidden text
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';

// mainHeader.style.borderBottom = '4px solid black';

// GETELEMENTBYCLASSNAME //
// let items = document.getElementsByClassName('list-item');
// console.log(items);
// console.log(items[1].textContent); // gets second element
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// Does not work
// items.style.backgroundColor = '#f4f4f4';

// console.log(document.querySelectorAll('.list-item'));

// How to iterate through elements
// for (let i = 0; i < items.length; i++) {
// items[i].style.backgroundColor = '#f4f4f4';
// items[i].style.border = '1px solid #ccc';
// }

// GETELEMENTSBYTAGNAME //
// let li = document.getElementsByTagName('li');
// console.log(li)
// li[1].textContent = '#2 Item'
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = '#ccc';

// for (let i = 0; i < li.length; i++) {
// li[i].style.backgroundColor = '#f4f4f4';
// li[i].style.border = '1px solid #ccc';
// }

// QUERYSELECTOR //
// let header = document.querySelector('#main-header');
// header.style.borderBottom = '4px solid #ccc';

// let input = document.querySelector('.item-input');
// input.value = 'Hello, World';

// Selecting our button input
// let submit = document.querySelector('input[type="button"]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-iKtem'); // selects the first element only
// item.style.color = '#ccc';

// let lastItem = document.querySelector('.list-item:last-child');
// lastItem.style.color = 'orange';

// let secondItem = document.querySelector('.list-item:nth-child(2)');
// secondItem.style.color = 'teal';

// QUERYSELECTORALL //
// let titles = document.querySelectorAll('.title');
// console.log(titles);

// Gets all odd numbered elements, index 0 is counted as 1
// let odd = document.querySelectorAll('li:nth-child(odd)');

// for (let i = 0; i < odd.length; i++) {
// odd[i].style.backgroundColor = '#f4f4f4';
// }

// let even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < even.length; i++) {
// even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM //
// let itemList = document.querySelector('.items');
// parentNode
// console.log(itemList.parentNode) // gets the parentNode of the element
// itemList.parentElement.style.backgroundColor = '#f4f4f4'; // changes background color of parentNode 
// console.log(itemList.parentNode.parentNode)
// itemList.parentNode.parentNode.style.backgroundColor = '#f4f4f4';

// parentElement, does the same as parentNode
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);
// itemList.parentElement.parentElement.style.backgroundColor = '#f4f4f4';

// childNodes, not recommended because it also selects linebreaks
// console.log(itemList.childNodes)

// children, recommended since it only selects elements
// console.log(itemList.children)
// console.log(itemList.children[1]) // selects second element
// itemList.children[1].style.backgroundColor = 'yellow'; 

// FirstChild, not recommended since it selects the text node instead of the HTML node
// console.log(itemList.firstChild)

// FirstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello 1';

// LastChild, not recommended since it selects a textnode line break
// console.log(itemList.lastChild)

// lastElementChild, recommended since it selects last HTML element
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling, not recommended since it selects the textnode again
// console.log(itemList.nextSibling)

// nextElementSibling, selects HTML element
// console.log(itemList.nextElementSibling)

// previousSibling, not recommended
// console.log(itemList.previousSibling)

// previousElementSibling, recommended
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
// let newDiv = document.createElement('div');

// Add class
// newDiv.className = 'hello';

// Add id
// newDiv.id = 'hello1';

// Add attr
// newDiv.setAttribute('title', 'Hello Div')

// Creating text node for our div
// let newDivText = document.createTextNode('Hello, World!');

// Adding newDivText using appendChild since it will be a child of newDiv
// newDiv.appendChild(newDivText);

// let mainHeaderContainer = document.querySelector('#main-header .container');
// let headerTitle = document.querySelector('#main-header #header-title');

// Inserts before an element, insertBefore(<addedElement>, <elementBefore>)
// mainHeaderContainer.insertBefore(newDiv, headerTitle);

// Setting newDiv styles
// newDiv.style.fontSize = '2rem';
// newDiv.style.border = '1px solid #ccc';

// console.log(newDiv)

// EVENTS //
// let clickButton = document.querySelector('.click-here-button')
// .addEventListener('click', buttonClick);

// function buttonClick(e) {
// document.querySelector('#header-title').textContent = 'Changed';
// document.querySelector('main').style.backgroundColor = '#f4f4f4'

// Prints the attributes of the element that has the eventListener
// console.log(e);

// Prints the actual element that was clicked
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);

// let output = document.querySelector('#output');
// output.innerHTML = '<h3>'+ e.target.id +'</h3>';

// console.log(e.type);

// Position within the page
// console.log(e.clientX);
// console.log(e.clientY);

// Position of the mouse inside the element
// console.log(e.offsetX);
// console.log(e.offsetY);

// Checks if the alt key is held down
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);

// }

const button = document.querySelector('.click-here-button');
const box = document.querySelector('#box');
const output = document.querySelector('#output')

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent); // click down
// button.addEventListener('mouseup', runEvent); // after click

// Event triggered when the mouse enters the div
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent); // mouseover triggers when elements inside are hovered over as well
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// const itemInput = document.querySelector('input[type="text"]');
// const form = document.querySelector('form');
// const select = document.querySelector('.select-container');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent); // when you click the input box and select it
// itemInput.addEventListener('blur', runEvent); // triggers when you click outside of input box

// itemInput.addEventListener('cut', runEvent); // checks if you cut text
// itemInput.addEventListener('paste', runEvent); // checks if you copy text

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent); // also triggers when we select an option

// form.addEventListener('submit', runEvent);

// e stores the event that was triggered
// function runEvent(e) {

// Prevents the page from refreshing whenever we click the submit button
// e.preventDefault();

// console.log('EVENT TYPE: ' + e.type);

// Tracking the mouse position
// output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';

// Background color changes as the mouse pointer is moving
// document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${40})`;

// Prints the characters we are typing when using keydown listener
// This also prints the value of when the user changes their option in select
// console.log(e.target.value);
// output.innerHTML = `${e.target.value}`;

// document.body.style.display = 'none'; // deletes entire page

// }

const form = document.querySelector('.add-form');
const itemList = document.querySelector('.items');

// Form submit event
form.addEventListener('submit', addItem);

// Add item
function addItem(e) {
    e.preventDefault();
    // Get input value
    const newItem = document.querySelector('.item-input').value;
    // Creating a li and adding it to our list
    const li = document.createElement('li');
    // Adding a className
    li.className = 'list-item';
    // Add text node with input value from newItem
    li.appendChild(document.createTextNode(newItem));

    // Adding button to our list item
    const newButton = document.createElement('button');
    newButton.className = 'btn'
    newButton.textContent = 'X';

    li.appendChild(newButton);

    itemList.appendChild(li);


}