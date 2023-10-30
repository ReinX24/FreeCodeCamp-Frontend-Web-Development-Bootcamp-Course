document.querySelector('#button').addEventListener('click', loadUsers);
const usersContainer = document.querySelector('#users');

function loadUsers() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.php', true);

    xhr.onload = function () {

        if (this.status == 200 && usersContainer.innerHTML == '') {
            const users = JSON.parse(this.responseText)

            users.forEach((eachUser) => {
                const userList = document.createElement('ul');

                const userID = document.createElement('li');
                const userName = document.createElement('li');
                userID.textContent = eachUser.id;
                userName.textContent = eachUser.name;

                userList.appendChild(userID);
                userList.appendChild(userName);

                usersContainer.appendChild(userList);
            })

        }

    }

    xhr.send();

}