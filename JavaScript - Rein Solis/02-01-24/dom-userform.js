// Shows the body of the HTML document
// console.log(document.body.innerHTML)

// Prints the innerHTML of the button
// console.log(document.querySelector('button').innerHTML)

// Storing the button HTML element within a variable
// const btnHTML = document.querySelector('button').innerHTML
// console.log(btnHTML)

// Selecting buttons by their classes
// const btnOne = document.querySelector('.btn-one')
// console.log(btnOne)

// Selecting divs by their classes
// const content = document.querySelector('.content')
// console.log(content.innerText) // prints the text within the div

const submitBtn = document.querySelector('#submit-btn')

submitBtn.addEventListener('click', (e) => {

    e.preventDefault() // stop the form from refreshing

    const firstName = document.querySelector('#firstNameInput').value
    const lastName = document.querySelector('#lastNameInput').value
    const emailAddress = document.querySelector('#emailAddressInput').value

    // Capitalizes the first character of each string
    let titleCase = firstName.split(" ").map((eachElem) => {
        return eachElem.charAt(0).toUpperCase() + eachElem.slice(1, eachElem.length)
    })
    // console.log(titleCase)

    // Checks if the firstName, lastName, or emailAddress is empty. Shows an 
    // error if the field is empty.
    if (firstName == '') {
        document.querySelector('#first-name-alert').classList.remove('d-none')
        setTimeout(() => {
            document.querySelector('#first-name-alert').classList.add('d-none')
        }, 2000)
    } else if (lastName == '') {
        document.querySelector('#last-name-alert').classList.remove('d-none')
        setTimeout(() => {
            document.querySelector('#last-name-alert').classList.add('d-none')
        }, 2000)
    } else if (emailAddress == '') {
        document.querySelector('#email-alert').classList.remove('d-none')
        setTimeout(() => {
            document.querySelector('#email-alert').classList.add('d-none')
        }, 2000)
    } else {
        document.querySelector('#info-table').classList.remove('d-none')
        document.querySelector('#firstName').innerText = firstName
        document.querySelector('#lastName').innerText = lastName
        document.querySelector('#emailAddress').innerText = emailAddress
    }
})