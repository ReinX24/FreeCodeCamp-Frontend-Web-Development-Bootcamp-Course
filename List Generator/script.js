
// Adding Elements
const inputText = document.getElementById('list-text');

const addButton = document.querySelector('.add-item-button');
const itemList = document.querySelector('ul');

function addItem() {
    if (inputText.value.length !== 0) {
        const itemToAdd = inputText.value;
        const itemElementCheckBox = document.createElement('input');
        itemElementCheckBox.type = 'checkbox';

        const itemElement = document.createElement('li');
        // itemElement.innerHTML = "<li></li>";
        itemElement.textContent = itemToAdd;

        // itemList.appendChild(itemElementCheckBox);
        itemList.appendChild(itemElement);
    } else {
        alert('Enter item content!');
    }
}

addButton.onclick = addItem;

// Removing last added element
const removeButton = document.querySelector('.delete-item-button');

function removeItem() {
    try {
        itemList.removeChild(itemList.lastChild);
    } catch (err) {
        alert('No items in list!');
    }
}

removeButton.onclick = removeItem;

// Inserting a paragraph element above an existing paragraph element
/*
const firstPElement = document.querySelectorAll('p').item(0); // first p instance
const parentPElement = document.querySelector('.main-body');
const insertP = document.createElement('p');
insertP.textContent = 'Added text above an existing paragraph element';
parentPElement.insertBefore(insertP, firstPElement);
*/
