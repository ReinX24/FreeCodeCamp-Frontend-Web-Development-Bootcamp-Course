const DEFAULT_GRID_SIZE = 4
const DEFAULT_SCREEN_TOTAL = 960
let darkCounter = 0

let redColorValue = 255
let greenColorValue = 255
let blueColorValue = 255
const DECREASE_VALUE = 255 * .10

// TODO: remove unneeded code
// TODO: add a reset grid color button
// TODO: style buttons
function createSquares(gridSides) {

    const body = document.querySelector('body')
    const container = document.querySelector('#container')

    // Clearing the contents of our container
    container.innerHTML = ''
    container.classList.add('container')

    // Setting container width and height
    container.style.width = `${DEFAULT_SCREEN_TOTAL}px`
    container.style.height = `${DEFAULT_SCREEN_TOTAL}px`

    for (let i = 0; i < gridSides * gridSides; i++) {
        // Creating and adding attributes for each square
        const square = document.createElement('div')
        square.classList.add('square')

        square.style.flexGrow = '1'
        square.style.flexShrink = '1'
        square.style.flexBasis = `${(DEFAULT_SCREEN_TOTAL / gridSides) / 10}%`

        // square.addEventListener('mouseover', () => {
        //     square.style.backgroundColor = `rgba(${redColorValue}, ${greenColorValue}, ${blueColorValue})`
        // })

        // square.addEventListener('mouseleave', () => {
        //     square.style.backgroundColor = ''
        // })

        container.appendChild(square)
    }

}

// Prompt the user for the number of sides for their new grid
function askGridSize() {
    const gridSize = prompt('Enter new grid sides')
    if (gridSize > 100) { // limit to 100 sides to avoid using too much resources
        alert('Grid size too big!')
    } else {
        createSquares(gridSize)
    }
}

// Ask the user if they want to reset the grid to its original state
function resetGrid() {
    if (confirm('Reset to default grid?')) {
        createSquares(DEFAULT_GRID_SIZE)
    }
}

// Function that generates random colors per mouseover
function randomColorSquares() {
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {

        square.removeEventListener('mouseover', generateDefaultBackgroundColor)
        square.addEventListener('mouseover', generateRandomBackgroundColor)

        // square.addEventListener('mouseleave', () => {
        //     square.style.backgroundColor = ''
        // })
    })
}

function generateRandomBackgroundColor() {
    // square.replaceWith(square.cloneNode(true)) // clones the element, removes event listeners

    redColorValue = randomIntFromInterval(0, 255)
    greenColorValue = randomIntFromInterval(0, 255)
    blueColorValue = randomIntFromInterval(0, 255)

    // Generates a random rgb value per mouseover each square
    // console.log(`${redColorValue} ${greenColorValue} ${blueColorValue}`)
    this.style.backgroundColor = `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})`
}

// Function that sets default color per mouseover
function defaultColorSquares() {
    const squares = document.querySelectorAll('.square')
    // Reset values to white
    redColorValue = 255
    greenColorValue = 255
    blueColorValue = 255
    console.log('TEST')

    squares.forEach((square) => {

        square.removeEventListener('mouseover', generateRandomBackgroundColor)
        square.addEventListener('mouseover', generateDefaultBackgroundColor)

        // square.addEventListener('mouseleave', () => {
        // console.log('OUT!')
        // square.style.backgroundColor = ''
        // })
    })
}

// Sets default background color and makes it darker each interaction
function generateDefaultBackgroundColor() {
    // console.log(`${redColorValue} ${greenColorValue} ${blueColorValue}`)
    this.style.backgroundColor = `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})`
    redColorValue -= DECREASE_VALUE
    greenColorValue -= DECREASE_VALUE
    blueColorValue -= DECREASE_VALUE
}

// Function that generates a random number between two numbers
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Adding event listeners
window.onload = createSquares(DEFAULT_GRID_SIZE)

const generateGridBtn = document.querySelector('#generate-grid-btn')
generateGridBtn.addEventListener('click', askGridSize)

const resetGridBtn = document.querySelector('#reset-grid-btn')
resetGridBtn.addEventListener('click', resetGrid)

const randomColorsBtn = document.querySelector('#random-colors-btn')
randomColorsBtn.addEventListener('click', randomColorSquares)

const defaultColorsBtn = document.querySelector('#default-colors-btn')
defaultColorsBtn.addEventListener('click', defaultColorSquares)