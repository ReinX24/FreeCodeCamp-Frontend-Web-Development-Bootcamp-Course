document.querySelector('#button').addEventListener('click', getName);
document.querySelector('#getForm').addEventListener('submit', getName);
document.querySelector('#postForm').addEventListener('submit', postName)


function getName(e) {
    e.preventDefault(); // prevents webpage from going to a new file

    let name = document.querySelector('#name-input').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'process.php?name=' + name, true);

    xhr.onload = function () {
        console.log(this.responseText)
    }

    xhr.send();
}

function postName(e) {
    e.preventDefault();

    const name = document.getElementById('post-name').value;
    const params = "name=" + name;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'process.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        console.log(this.responseText);
    }

    xhr.send(params);
}