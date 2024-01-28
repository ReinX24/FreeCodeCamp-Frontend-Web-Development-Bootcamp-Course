// Adding a div to our .container
const container = document.querySelector('#container')

const content = document.createElement('div')
content.classList.add('content')
content.textContent = 'This is the glorious text-content!'

container.appendChild(content)

// Exercise
// 1. a <p> element with red text that says "Hey I'm red!"
const redText = document.createElement('p')
redText.textContent = 'Hey I\'m red'
redText.setAttribute('style', 'color:red;')

container.appendChild(redText)

// TODO: do exercises 2 & 3

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