function addBookmark(e) {
    e.preventDefault();

    const siteName = document.querySelector('#name-input').value;
    const siteURL = document.querySelector('#url-input').value;

    const newBookmark = {
        name: siteName,
        url: siteURL
    }

    if (!siteName) {
        document.querySelector('#no-site-name-alert').classList.remove('d-none');

        setTimeout(() => {
            document.querySelector('#no-site-name-alert').classList.add('d-none');
        }, 3000)

        return false;
    }
    if (!siteURL) {
        document.querySelector('#no-site-url-alert').classList.remove('d-none');

        setTimeout(() => {
            document.querySelector('#no-site-url-alert').classList.add('d-none');
        }, 3000)
        return false;
    }

    // Checking if the entered siteURL is valid or  not
    const urlRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);
    if (!urlRegex.test(siteURL)) {
        document.querySelector('#invalid-site-url-alert').classList.remove('d-none');

        setTimeout(() => {
            document.querySelector('#invalid-site-url-alert').classList.add('d-none');
        }, 3000)
        return false;
    }

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

    document.querySelector('#name-input').value = '';
    document.querySelector('#url-input').value = '';

    // Refreshes the page with updated stored bookmarks
    fetchBookmarks();

    // Show message that tells the user they have successfully added a bookmark
    document.querySelector('#bookmark-added-alert').classList.remove('d-none');

    setTimeout(() => {
        document.querySelector('#bookmark-added-alert').classList.add('d-none');
    }, 3000)

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

    // Show message that tells the user they have removed a boookmark
    document.querySelector('#bookmark-removed-alert').classList.remove('d-none');

    setTimeout(() => {
        document.querySelector('#bookmark-removed-alert').classList.add('d-none');
    }, 3000)
}

// Loads the stored bookmarks to our webpage
function fetchBookmarks() {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    let bookmarksContainer = '';

    storedBookmarks.forEach((eachBookmark) => {
        bookmarksContainer += `
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
