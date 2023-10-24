// Callbacks
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
    }, 1000) // delays 1 second before executing function
}

// Function that takes in a post object and a function (callback function)
function createPost(newPost, callback) {
    setTimeout(() => {
        posts.push(newPost);
        callback();
    }, 2000)
}

getPosts();

createPost({
    title: 'Post Three',
    body: 'This is post three body'
}, getPosts);

// 