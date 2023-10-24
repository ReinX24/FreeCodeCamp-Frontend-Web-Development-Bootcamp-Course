// Promises
const posts = [
    {
        title: 'Post One',
        body: 'This is post one body'
    },
    {
        title: 'Post Two',
        body: 'This is post two body'
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';

        posts.forEach((eachPost) => {
            output += `<li>${eachPost.title}</li>`;
        })

        document.body.innerHTML = output;
    }, 1000)
}

// Returns a promise
function createPost(newPost) {
    return new Promise((resolve, reject) => {
        // Resolve: successful, Reject: unsuccessful
        setTimeout(() => {
            posts.push(newPost);

            const error = false;

            if (!error) { // if there are no errors
                resolve();
            } else {
                // Throws an Uncaught (in promise) error
                reject('Error: Something went wrong');
            }
        }, 2000)

    });

}

// Creating a post then getting the posts using the .then notation
// createPost({
//     title: 'Post three',
//     body: 'This is post three body'
// }).then(getPosts)
//     .catch(err => console.log(err)); // catches errors

// Promise.all
// const promise1 = Promise.resolve('Hello, World!');
// const promise2 = Promise.resolve(10);
// const promise3 = new Promise((resolve, reject) => {
// setTimeout(resolve, 2000, 'Goodbye'); // function, delat, parameter
// });
// fetch gets json while .json turns json objects to an array of json object
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Taking in an array of promises
// Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
// console.log(values) // prints all logs after 2 seconds since it waits for all promises to be resolved
// });

// Async / Await
// async function init() {
// await createPost({ title: 'Post Three', body: 'This is post three' });
// Waits for the function above to be done before executing getPosts
// getPosts();
// }

// init();

// Async / Await / Fetch
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json(); // converts fetched data to an array of json objects
    console.log(data);
}

fetchUsers();