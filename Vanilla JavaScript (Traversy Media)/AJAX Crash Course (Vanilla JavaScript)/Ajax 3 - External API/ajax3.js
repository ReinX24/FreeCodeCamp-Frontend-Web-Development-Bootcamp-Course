// API Link: https://api.github.com/users

document.querySelector('#button').addEventListener('click', loadUsers);

// Load github users
function loadUsers() {
    const xhr = new XMLHttpRequest();
    // Get data from API (application programming interface)
    xhr.open('GET', 'https://api.github.com/users', true);

    // After the data is loaded to the xhr
    xhr.onload = function () {
        if (this.status == 200) {
            const users = JSON.parse(xhr.responseText);

            const userContainer = document.querySelector('#users');

            // Checks if the container has child elements
            if (!userContainer.hasChildNodes()) {

                users.forEach((eachUser) => {
                    const eachUserContainer = document.createElement('div');
                    eachUserContainer.className = 'user';

                    const userImg = document.createElement('img');
                    userImg.src = eachUser.avatar_url;
                    userImg.width = '70'; // in pixels
                    userImg.height = '70';
                    eachUserContainer.appendChild(userImg);

                    const userInfo = document.createElement('ul');

                    const userId = document.createElement('li');
                    userId.textContent = `ID: ${eachUser.id}`;
                    userInfo.appendChild(userId);

                    const userName = document.createElement('li');
                    userName.textContent = `Login: ${eachUser.login}`
                    userInfo.appendChild(userName)

                    eachUserContainer.appendChild(userInfo);

                    userContainer.appendChild(eachUserContainer);
                });

            }
        }
    }

    xhr.send();
}