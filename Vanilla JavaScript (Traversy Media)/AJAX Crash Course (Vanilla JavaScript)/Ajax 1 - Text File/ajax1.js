// Create an event listener
document.querySelector('#button').addEventListener('click', loadText)

function loadText() {
    // Create XHR Object
    const xhr = new XMLHttpRequest();
    // OPEN - type, url/file, async
    xhr.open('GET', 'sample.txt', true);

    // console.log(`READY STATE: ${xhr.readyState}`) // only prints readyState 1
    // Tells the user if the server connection is established

    // OPTIONAL - used for loaders
    // xhr.onprogress = function () {
    // console.log(`READY STATE: ${xhr.readyState}`) // readyState 3
    // Tells the user that their request is being processed 
    // }

    xhr.onload = function () {
        // console.log(`READY STATE: ${xhr.readyState}`) // only prints readyState 4
        // Checks if the status of the xhr object is ok (represented by 200)
        if (this.status == 200) {
            const sampleData = document.createElement('p');
            sampleData.textContent = this.responseText;
            document.querySelector('#text-container').appendChild(sampleData);
        } else if (this.status == 404) { // if the file does not exist
            const errorMsg = document.createElement('p');
            errorMsg.textContent = '404: File Not Found'
            document.querySelector('#text-container').appendChild(errorMsg)
        }
    }

    // For catching any errors
    xhr.onerror = function () {
        console.log(`Request Error...`)
    }

    // Old version of using xhr to get files
    // xhr.onreadystatechange = function () {
    // console.log(`READY STATE: ${xhr.readyState}`) // prints readyState values 2, 3, 4
    // if (this.readyState == 4 && this.status == 200) {
    // console.log(this.responseText)
    // }
    // }

    // Sends request, triggers the onload status
    xhr.send();
}

// readyState Values
// 0: request not initilalized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not found"
