document.querySelector('#button-1').addEventListener('click', loadUser)
document.querySelector('#button-2').addEventListener('click', loadUsers)

function loadUser() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            // Converting JSON string into an object
            const user = JSON.parse(this.responseText);
            // console.log(user) // prints object and its attribues
            // console.log(user.id)
            // console.log(user.name)
            // console.log(user.email)

            const userContainer = document.querySelector('#user')

            if (userContainer.innerHTML == '') { // checks if the container is empty
                const userDetailsList = document.createElement('ul')
                const userId = document.createElement('li')
                const userName = document.createElement('li')
                const userEmail = document.createElement('li')

                userId.textContent = `ID: ${user.id}`;
                userName.textContent = `Name: ${user.name}`;
                userEmail.textContent = `Email: ${user.email}`;

                userDetailsList.appendChild(userId)
                userDetailsList.appendChild(userName)
                userDetailsList.appendChild(userEmail)

                userContainer.appendChild(userDetailsList)
            }

        }
    }

    // Processes the functions in xhr and sends them to our page
    xhr.send();
}

function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);

    xhr.onload = function () {
        console.log(this.status)
        if (this.status == 200) {
            const users = JSON.parse(this.responseText);

            const usersContainer = document.querySelector('#users');

            if (usersContainer.innerHTML == '') { // checks if the container is empty
                // Adds each element from users array to usersContainer using a for each loop
                users.forEach((eachUser) => {
                    const userDetailsList = document.createElement('ul')
                    const userId = document.createElement('li')
                    const userName = document.createElement('li')
                    const userEmail = document.createElement('li')

                    userId.textContent = `ID: ${eachUser.id}`;
                    userName.textContent = `Name: ${eachUser.name}`;
                    userEmail.textContent = `Email: ${eachUser.email}`;

                    userDetailsList.appendChild(userId)
                    userDetailsList.appendChild(userName)
                    userDetailsList.appendChild(userEmail)

                    usersContainer.appendChild(userDetailsList)
                })
            }
        }
    }


    xhr.send();
}