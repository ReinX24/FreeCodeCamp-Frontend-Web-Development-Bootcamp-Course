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
let odd = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
}

let even = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = '#ccc';
}