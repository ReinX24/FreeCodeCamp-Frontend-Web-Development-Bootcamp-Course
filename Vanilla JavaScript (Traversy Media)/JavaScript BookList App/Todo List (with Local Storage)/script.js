// Class for modeling Book objects
class Book {
    constructor(bookTitle, bookAuthor, bookISBN) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookISBN = bookISBN;
    }
}

// Class for viewing Books
class UI {

    static displayBooks() {
        // Getting books from local storage
        const storedBooks = Storage.getBooks();
        storedBooks.forEach((eachBook) => UI.addBookToList(eachBook));
    }

    static addBookToList(newBook) {
        const tableBody = document.querySelector('#book-table-data');

        const tableRow = document.createElement('tr');

        tableRow.innerHTML = `
        <td>${newBook.bookTitle}</td>
        <td>${newBook.bookAuthor}</td>
        <td>${newBook.bookISBN}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
        `;

        tableBody.appendChild(tableRow);
    }

    static deleteBookFromList(targetElement) {
        if (targetElement.classList.contains('delete')) {
            targetElement.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    // Method for telling the user if they added or deleted a book
    static alertMessage(messageText, messageType) {
        const messageContainer = document.createElement('div');
        messageContainer.textContent = messageText;
        messageContainer.className = `alert alert-${messageType} mt-4`;

        const container = document.querySelector('.container');
        const bookForm = document.querySelector('#book-form');

        container.insertBefore(messageContainer, bookForm);

        // Removes the alert after 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

}

class Storage {

    static getBooks() {
        let storedBooks;
        if (localStorage.getItem('storedBooks') == null) {
            storedBooks = [];
        } else {
            // Parses JSON object into an array that we can use
            storedBooks = JSON.parse(localStorage.getItem('storedBooks'));
        }
        return storedBooks;
    }

    static addBook(newBook) {
        const storedBooks = Storage.getBooks();
        storedBooks.push(newBook);
        // Saves to local storage as a JSON object containing book objects
        localStorage.setItem('storedBooks', JSON.stringify(storedBooks));
    }

    static removeBook(deletedBookISBN) {
        const storedBooks = Storage.getBooks();
        storedBooks.forEach((eachBook, bookIndex) => {
            if (eachBook.bookISBN == deletedBookISBN) {
                storedBooks.splice(bookIndex, 1); // removes Book object from array
            }
        })
        localStorage.setItem('storedBooks', JSON.stringify(storedBooks));
    }

}

// When the DOM loads, display the stored book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// When the user submits a book to the book list
document.querySelector('#book-form').addEventListener('submit', (e) => {

    e.preventDefault();

    const newBookTitle = document.querySelector('#title').value;
    const newBookAuthor = document.querySelector('#author').value;
    const newBookISBN = document.querySelector('#isbn').value;

    // Checks if the 
    if (newBookTitle == '' || newBookAuthor.length == '' || newBookISBN == '') {
        UI.alertMessage('Please Fill All Fields', 'danger');
    } else {
        const newBook = new Book(newBookTitle, newBookAuthor, newBookISBN);

        // Add book to the list in the UI
        UI.addBookToList(newBook);

        // Add book to local storage
        Storage.addBook(newBook);

        // Tell the user they have added a new book
        UI.alertMessage('Book Added', 'success')

        // Clear input fields when a new book is added
        UI.clearFields();
    }

});

// When the user deletes a book from the book list
document.querySelector('#book-table-data').addEventListener('click', (e) => {
    UI.deleteBookFromList(e.target);
    UI.alertMessage('Book Removed', 'success');
    Storage.removeBook(e.target.parentElement.previousElementSibling.textContent);
})

document.querySelector('#search-input').addEventListener('keyup', () => {
    const searchInput = document.querySelector('#search-input').value.toLowerCase();
    const bookTableData = document.querySelector('#book-table-data');
    const tableBooks = bookTableData.getElementsByTagName('tr');

    Array.from(tableBooks).forEach((eachBook) => {
        const eachBookTitle = eachBook.querySelector('td').textContent.toLowerCase();
        if (eachBookTitle.indexOf(searchInput) != -1) {
            eachBook.style.display = '';
        } else {
            eachBook.style.display = 'none';
        }
    });
})
