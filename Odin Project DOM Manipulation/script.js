console.log("Test")

// const elements = document.getElementsByName('language')
// console.log(elements)

// const p = document.getElementById('message')
// console.log(p)

// const node = document.querySelector('#container')
// if (node.nodeType == Node.ELEMENT_NODE) {
    // console.log('This is an element node!')
    // console.log(node.nodeValue)
    // console.log(node.nodeName)
// }

// buttons is a nodelist. It looks and acts much like an array.
// const buttons = document.querySelectorAll('button')

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         alert(button.id)
//     })
// })


// Printing the event using e
// const btn = document.querySelector('#btn')
// btn.addEventListener('click', function (e) {
    // Prints the event and information about the event
    // console.log(e)

    // Changing the background of the button
    // e.target.style.background = 'blue'
    // e.target.style.color = 'white'
// })

// function alertFunction() {
//     alert('YAY! YOU DID IT!')
// }

// const btn = document.querySelector('#btn')
// btn.onclick = alertFunction

// btn.addEventListener('click', alertFunction)

// const btn = document.querySelector("#btn")
// btn.addEventListener('click', () => {
//     alert('Hello World')
// })

// const btn = document.querySelector('#btn')
// btn.onclick = () => alert('Hello World')

// Adding a div to our .container
// const container = document.querySelector('#container')

// const content = document.createElement('div')
// content.classList.add('content')
// content.textContent = 'This is the glorious text-content!'

// container.appendChild(content)

// Exercise
// 1. a <p> element with red text that says "Hey I'm red!"
// const redText = document.createElement('p')
// redText.textContent = 'Hey I\'m red'
// redText.setAttribute('style', 'color:red;')

// container.appendChild(redText)

// 2. an <h3> with blue text that says "Im a blue h3!"
// const blueText = document.createElement('h3')
// blueText.textContent = 'I\'m a blue h3!'
// blueText.setAttribute('style', 'color:blue;')

// container.appendChild(blueText)

// 3. a <div> with a black border and pink background color with the following
// elements inside of it:
//      1. another <h1> that says "I'm in a div"
//      2. a <p> that says "ME TOO!"
//      3. Hint for this one: after creating the <div> with the createElement,
//      append the <h1> and <p> to it before adding it to the container.

// const div = document.createElement('div')
// div.setAttribute('style', 'background: pink; border: 4px solid black;')

// const h1Div = document.createElement('h1')
// h1Div.textContent = 'I\'m in a div'

// const pDiv = document.createElement('p')
// pDiv.textContent = 'ME TOO!'

// div.appendChild(h1Div)
// div.appendChild(pDiv)

// container.appendChild(div)

// const container = document.querySelector("#container")

// Prints the .display element, .dir prints an interactive list of properties.
// console.dir(container.firstElementChild)

// const controls = document.querySelector(".controls")

// Prints the .display element, the element before .controls.
// console.dir(controls.previousElementSibling)

// Element creation
// const div = document.createElement('div')

// Adding inline style
// div.style.color = 'blue'
// div.style.cssText = 'color: blue background: white'
// div.setAttribute('style', 'color: blue; background: white;')

// Editing attributes
// div.setAttribute('id', 'theDiv')
// div.getAttribute('id')
// div.removeAttribute('id')

// Working with classes
// div.classList.add('new')
// div.classList.remove('new')
// div.classList.toggle('active')
// if the class does not have 'active' then add it, or if it does, then remove 
// it

// Adding text content
// div.textContent = 'Hello World!'
// creates a text node containing "Hello World!" and inserts it in div

// div.innerHTML = '<h1>Hello World!</h1>'

// document.querySelector('#container').appendChild(div)
