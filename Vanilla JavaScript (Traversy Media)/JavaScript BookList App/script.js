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
        const storedBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '3434434'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '45545'
            }
        ];

        const books = storedBooks;

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

}

// Store Class: Handles Storage

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

    // Instantiating book
    const book = new Book(title, author, isbn);

    // Adding book to our DOM
    UI.addBookToList(book);

    // Clear fields
    UI.clearFields();

});

// Event: Remove a Book