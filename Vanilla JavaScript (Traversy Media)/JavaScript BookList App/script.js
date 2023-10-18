// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    // Method for displaying the books and showing them in the DOM
    static displayBooks() {
        // Hardcoded for now, data will come from Storage class
        // const storedBooks = [
        //     {
        //         title: 'Book One',
        //         author: 'John Doe',
        //         isbn: '3434434'
        //     },
        //     {
        //         title: 'Book Two',
        //         author: 'Jane Doe',
        //         isbn: '45545'
        //     }
        // ];
        // const books = storedBooks;
        const books = Store.getBooks();

        books.forEach((eachBook) => UI.addBookToList(eachBook));
    }

    // Method for adding books to the DOM
    static addBookToList(book) {
        const bookList = document.querySelector('#book-list');

        const bookRow = document.createElement('tr');

        bookRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class = "btn btn-danger btn-sm delete">X</a></td>`;

        bookList.appendChild(bookRow);
    }

    // Method for clearing fields after we add a book
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    // Method for deleting a book
    static deleteBook(targetElement) {
        // Checks if the targetElement contains the class 'delete'
        if (targetElement.classList.contains('delete')) {
            targetElement.parentElement.parentElement.remove();
        }
    }

    static showAlert(textMessage, className) {
        const div = document.createElement('div');

        // Possible results:
        // <div class = "alert alert-danger"></div>
        // <div class = "alert alert-success"></div>

        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(textMessage));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        container.insertBefore(div, form);

        // Vanish in 3 seconds
        // setTimeout(function, time in ms before function triggers);
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

}

// Store Class: Handles Storage
class Store {
    // Method for getting books from local storage
    static getBooks() {
        let books;
        // Checking if there are no 'books' in localStorage
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            // Using JSON.parse so that we can use it in JavaScript properly
            // .parse transforms JSON into an array instead of a javascript object
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    // Method for adding books to local storage
    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        // .stringify converts to a JSON string 
        localStorage.setItem('books', JSON.stringify(books));
    }

    // Method for removing book from local storage
    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach((eachBook, index) => {
            if (eachBook.isbn == isbn) {
                books.splice(index, 1); // removes book
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Events: Display Books
// Triggers as soon as the DOM loads
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Validating book attributes
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill in all fields', 'danger'); // danger adds styles from bootstrap
    } else {
        // Instantiating book
        const book = new Book(title, author, isbn);

        // Adding book to our DOM
        UI.addBookToList(book);

        // Add book to local storage
        Store.addBook(book);

        // Show success message
        UI.showAlert('Book Added', 'success');

        // Clear fields
        UI.clearFields();
    }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // Passes in the clicked element to the deleteBook method
    UI.deleteBook(e.target);

    // Remove book from local storage
    // Goes to the parent element of the delete button and to the element before
    // the delete button, the table row containing the isbn text
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Delete book message
    UI.showAlert('Book Removed', 'success');
})