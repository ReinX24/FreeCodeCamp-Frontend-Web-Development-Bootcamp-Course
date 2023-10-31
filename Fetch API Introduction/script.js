document.querySelector('#getText').addEventListener('click', getText);
document.querySelector('#getUsers').addEventListener('click', getUsers);
document.querySelector('#getPosts').addEventListener('click', getPosts);

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

            let outputContent = '<h2>Users</h2>';

            data.forEach((eachData) => {
                outputContent += `
                    <ul>
                    <li>ID: ${eachData.id}</li>
                    <li>Name: ${eachData.name}</li>
                    <li>Email: ${eachData.email}</li>
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

            let outputPosts = '<h2>Posts</h2>'

            posts.forEach((eachPost) => {
                outputPosts += `
                <div>
                    <h3>${eachPost.title}</h3>
                    <p>${eachPost.body}</p>
                </div>
                `;
            })

            outputDiv.innerHTML = outputPosts;

        })
}