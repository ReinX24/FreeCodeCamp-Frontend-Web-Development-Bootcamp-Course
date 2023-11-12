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

    if (!validateForm(siteName, siteURL)) {
        return false; // terminates function if the form returns false
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

    // Removes the entered site name and url after saving newBookMark
    document.querySelector('#myForm').reset();

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

    // Reset back to localStorage with updated bookmarks
    localStorage.setItem('bookmarks', JSON.stringify(storedBookmarks));

    // Updates the webpage with updated bookmarks in localStorage
    fetchBookMarks();
}

// Fetch bookmarks
function fetchBookMarks() {
    // Get bookmarks in localStorage
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

// Checks if the entered site name, url, and the url is a valid url
function validateForm(siteName, siteURL) {
    // Checking if the siteName and siteURL is empty or not
    if (!siteName) {
        document.querySelector('#site-name-alert').classList.remove('hidden');

        setTimeout(() => {
            document.querySelector('#site-name-alert').classList.add('hidden');
        }, 3000)

        return false; // terminates the functions
    } else if (!siteURL) {
        document.querySelector('#site-url-alert').classList.remove('hidden');

        setTimeout(() => {
            document.querySelector('#site-url-alert').classList.add('hidden');
        }, 3000)

        return false;
    }

    // Validating the entered siteURL
    const regexExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regexURL = new RegExp(regexExpression);

    if (!siteURL.match(regexURL)) {
        document.querySelector('#invalid-url-alert').classList.remove('hidden');

        setTimeout(() => {
            document.querySelector('#invalid-url-alert').classList.add('hidden');
        }, 3000)

        return false;
    }

    // Returns true of none of the if statements above are triggered
    return true;
}

// Loads saved bookmarks in localStorage when the webpage loads
document.addEventListener('DOMContentLoaded', fetchBookMarks);

// Listen for form submit
document.querySelector('#myForm').addEventListener('submit', saveBookmark);

