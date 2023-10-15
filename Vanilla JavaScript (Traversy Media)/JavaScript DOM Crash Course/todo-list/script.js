const todoForm = document.querySelector('form');
const itemList = document.querySelector('.todo-list');
const filterInput = document.querySelector('#input-filter');

todoForm.addEventListener('submit', addTodo);
itemList.addEventListener('click', deleteTodo);
filterInput.addEventListener('keyup', filterTodos);

function addTodo(e) {
    e.preventDefault();

    const newTodo = document.querySelector('.input-text').value;

    const newListItem = document.createElement('li');
    newListItem.className = 'todo-item';
    newListItem.textContent = newTodo;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'X';

    newListItem.appendChild(deleteButton);

    itemList.appendChild(newListItem);
}

function deleteTodo(e) {
    // If the element that the user clicked within the unordered list is the delete button
    if (e.target.classList.contains('delete-button')) {
        if (confirm('Delete Todo?')) {
            itemList.removeChild(e.target.parentElement);
        }
    }
}

function filterTodos(e) {
    // Get the entered text in filterInput
    const filterText = filterInput.value;
    // Get all li elements in itemList, returns a HTML collection
    const listItems = itemList.getElementsByTagName('li');
    // Converts HTML collection to an array and iterates through each element
    Array.from(listItems).forEach((eachItem) => {
        // Get the text content of the current element
        const currentItemText = eachItem.firstChild.textContent.toLowerCase();
        // Check if the current text content matches the filterText
        if (currentItemText.indexOf(filterText) != -1) {
            eachItem.style.display = 'flex'; // displays todo
        } else {
            eachItem.style.display = 'none'; // hides todo
        }
    })
}

