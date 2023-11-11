// Listen for form submit
document.querySelector('#myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    // e stands for event
    // Prevents default submit functionality of forms 
    // being submitted refreshing the page
    e.preventDefault();

    // Getting form values
    const siteName = document.querySelector('#siteName').value;
    const siteURL = document.querySelector('#siteURL').value;

    const newBookMark = {
        name: siteName,
        url: siteURL
    }

    // Local storage test
    // localStorage.setItem('test', 'hello world');
    // console.log(localStorage.getItem('test'));
    // localStorage.removeItem('test');
    // console.log(localStorage.getItem('test'));

    let bookMarks;
    // Checks if bookmarks is in localStorage already
    if (localStorage.getItem('bookmarks') == null) {
        bookMarks = [];
        bookMarks.push(newBookMark);
        // We need to convert the array into anm array of JSON strings 
        // so that we can save it in localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookMarks));
    } else {
        // Add newBookMark to bookmarks in localStorage
        // Parsing the array of JSON strings into an array of objects 
        bookMarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array
        bookMarks.push(newBookMark);
        // Update localStorage bookmarks object
        localStorage.setItem('bookmarks', JSON.stringify(bookMarks));
    }

    fetchBookMarks(); // fetches bookmarks and updates webpage
}

// Delete bookmark
function deleteBookmark(url) {
    // Get bookmarks from localStorage
    let storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Looping through our bookmarks 
    storedBookmarks.forEach((eachBookMark, i) => {
        if (eachBookMark.url == url) {
            // Remove from array
            storedBookmarks.splice(i, 1);
        }
    })
    console.log(storedBookmarks)

    localStorage.setItem('bookmarks', JSON.stringify(storedBookmarks));

    fetchBookMarks();
}

// Fetch bookmarks
function fetchBookMarks() {
    // Get bookMarks
    const bookMarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Get div where we will store our bookmarks
    const bookMarksResults = document.querySelector('#bookmarksResults');

    // Build our output
    bookMarksResults.innerHTML = '';

    bookMarks.forEach((eachBookMark) => {
        bookMarksResults.innerHTML += `
            <div class="well">
                <h3>${eachBookMark.name}
                    <a class="btn btn-default" target="_blank" href="${eachBookMark.url}">Visit</a>
                    <a onclick="deleteBookmark('${eachBookMark.url}')" class="btn btn-danger" href="#">Delete</a>
                </h3>
            </div>
        `
    })
}

// Loads saved bookmarks in localStorage when the webpage loads
document.addEventListener('DOMContentLoaded', fetchBookMarks);

