function addBookmark(e) {
    e.preventDefault();

    const siteName = document.querySelector('#name-input').value;
    const siteURL = document.querySelector('#url-input').value;

    const newBookmark = {
        name: siteName,
        url: siteURL
    }

    // TODO: check if the sitenName is empty or not
    // TODO: check if the siteURL is empty or not
    // TODO: add regex check to see if URL is valid

    let storedBookmarks;

    // Checks if there are existing bookmarks in localStorage
    if (localStorage.getItem('bookmarks') == null) {
        storedBookmarks = [];
        storedBookmarks.push(newBookmark);
        localStorage.setItem('bookmarks', JSON.stringify(storedBookmarks));
    } else {
        storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        storedBookmarks.push(newBookmark);
        localStorage.setItem('bookmarks', JSON.stringify(storedBookmarks));
    }

    // TODO: clear inputs after we save a bookmark

    // Refreshes the page with updated stored bookmarks
    fetchBookmarks();

}

// Deletes a bookmark
function deleteBookmark(deleteName, deleteURL) {
    let storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    storedBookmarks.forEach((eachBookmark, i) => {
        if (eachBookmark.name == deleteName && eachBookmark.url == deleteURL) {
            storedBookmarks.splice(i, 1);
        }
    })

    localStorage.setItem('bookmarks', JSON.stringify(storedBookmarks));

    // Refresh shown bookmarks on the webpage
    fetchBookmarks();
}

// Loads the stored bookmarks to our webpage
function fetchBookmarks() {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // If there are no stored bookmarks
    if (storedBookmarks.length == 0) {
        return false;
    }

    let bookmarksContainer;

    storedBookmarks.forEach((eachBookmark) => {
        bookmarksContainer = `
        <div class="card card-by-primary mt-4 mb-4">
            <div class="card-header">
                <h4 class="m-2">${eachBookmark.name}</h4>
            </div>
            <div class="card-body">
            <a href="${eachBookmark.url}" target="_blank"><button class="btn btn-seconday">Visit</button></a>
                <button onclick="deleteBookmark('${eachBookmark.name}', '${eachBookmark.url}')" class="btn btn-danger delete-btn">Delete</button>
            </div>
        </div>
        `;
    })

    document.querySelector('#results-container').innerHTML = bookmarksContainer;
}


window.onload = fetchBookmarks;

document.querySelector('#submit-website-btn').addEventListener('click', addBookmark);
