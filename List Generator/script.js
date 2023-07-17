
// Adding Elements
const inputText = document.getElementById('list-text');

const addButton = document.querySelector('.add-item-button');
const itemList = document.querySelector('ul');

function addItem() {
    const itemToAdd = inputText.value;
    const itemElementCheckBox = document.createElement('input');
    itemElementCheckBox.type = 'checkbox';

    const itemElement = document.createElement('li');
    // itemElement.innerHTML = "<li></li>";
    itemElement.textContent = itemToAdd;

    // itemList.appendChild(itemElementCheckBox);
    itemList.appendChild(itemElement);
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
