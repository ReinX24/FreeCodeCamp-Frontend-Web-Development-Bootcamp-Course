document.querySelector('#getText').addEventListener('click', getText);
document.querySelector('#getUsers').addEventListener('click', getUsers);
document.querySelector('#getPosts').addEventListener('click', getPosts);
document.querySelector('#addPost').addEventListener('click', addPost);

function getText(e) {
    // console.log(e.target); // prints the element that has the event listener

    // Fetching data from a text file
    // fetch('sample.txt')
    //     .then(function (res) {
    //         console.log(res.text())
    //         return res.text(); // returns the text content
    //     })
    //     .then(function (data) {
    //         console.log(data) // prints the text content
    //     })

    // .text() for text files
    fetch('sample.txt')
        .then((response) => response.text())
        .then((responseText) => {

            const outputDiv = document.querySelector('#output');
            outputDiv.innerHTML = `<p>${responseText}</p>`;

        })
        .catch((err) => console.log(err)); // for catching errors

}

// .json() for json files
function getUsers() {
    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {

            const outputDiv = document.querySelector('#output');

            let outputContent = '<h2 class="mb-4">Users</h2>';

            data.forEach((eachData) => {
                outputContent += `
                    <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${eachData.id}</li>
                    <li class="list-group-item">Name: ${eachData.name}</li>
                    <li class="list-group-item">Email: ${eachData.email}</li>
                    </ul>
                   `
            })
            outputDiv.innerHTML = outputContent;
        })
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((posts) => {

            const outputDiv = document.querySelector('#output');

            let outputPosts = '<h2 class="mb-4">Posts</h2>'

            posts.forEach((eachPost) => {
                outputPosts += `
                <div class="card card-body mb-3">
                    <h3>${eachPost.title}</h3>
                    <p>${eachPost.body}</p>
                </div>
                `;
            })

            outputDiv.innerHTML = outputPosts;

        })
}

function addPost(e) {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    // API link, object
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title: title, body: body })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))

}