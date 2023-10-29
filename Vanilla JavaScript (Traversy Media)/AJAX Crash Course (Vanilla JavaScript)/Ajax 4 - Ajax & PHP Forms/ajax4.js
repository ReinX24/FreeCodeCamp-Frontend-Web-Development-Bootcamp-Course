document.querySelector('#button').addEventListener('click', getName)

function getName() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'process.php?name=Rein', true);

    xhr.onload = function () {
        console.log(this.responseText)
    }

    xhr.send();
}