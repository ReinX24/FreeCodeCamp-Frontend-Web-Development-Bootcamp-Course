const DEFAULT_GRID_SIZE = 4
const DEFAULT_SCREEN_TOTAL = 960
let darkCounter = 0

// Default color values
let redColorValue = 128
let greenColorValue = 128
let blueColorValue = 128

// Decrease value for etch-a-sketch mode
const DECREASE_VALUE = 255 * .10


// TODO: style buttons
function createSquares(gridSides) {

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

        // Reset event liseteners to default background square color
        square.removeEventListener('mouseover', etchColorSquares)
        square.removeEventListener('mouseover', generateRandomBackgroundColor)

        square.addEventListener('mouseover', generateDefaultBackgroundColor)

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

// Set default color for hovering over squares
function defaultColorSquares() {
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.removeEventListener('mouseover', generateEtchBackgroundColor)
        square.removeEventListener('mouseover', generateRandomBackgroundColor)
        square.addEventListener('mouseover', generateDefaultBackgroundColor)
    })
}

// Default eventListener for each square
function generateDefaultBackgroundColor() {
    // Reset values to default values
    redColorValue = 128
    greenColorValue = 128
    blueColorValue = 128
    this.style.backgroundColor = `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})`
}

// Function that generates random colors per mouseover
function randomColorSquares() {
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.removeEventListener('mouseover', generateDefaultBackgroundColor)
        square.removeEventListener('mouseover', generateEtchBackgroundColor)
        square.addEventListener('mouseover', generateRandomBackgroundColor)
    })
}

function generateRandomBackgroundColor() {
    // Generates a random rgb value per mouseover each square
    redColorValue = randomIntFromInterval(0, 255)
    greenColorValue = randomIntFromInterval(0, 255)
    blueColorValue = randomIntFromInterval(0, 255)
    this.style.backgroundColor = `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})`
}

// Function that sets default color per mouseover
function etchColorSquares() {
    const squares = document.querySelectorAll('.square')
    // Reset values to white
    redColorValue = 255
    greenColorValue = 255
    blueColorValue = 255

    squares.forEach((square) => {
        square.removeEventListener('mouseover', generateDefaultBackgroundColor)
        square.removeEventListener('mouseover', generateRandomBackgroundColor)
        square.addEventListener('mouseover', generateEtchBackgroundColor)
    })
}

// Sets default background color and makes it darker each interaction
function generateEtchBackgroundColor() {
    this.style.backgroundColor = `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})`
    redColorValue -= DECREASE_VALUE
    greenColorValue -= DECREASE_VALUE
    blueColorValue -= DECREASE_VALUE
}

// Reset background color of our squares
function resetBackgroundColors() {
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.style.backgroundColor = ''
    })
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

const defaultColorsBtn = document.querySelector('#default-colors-btn')
defaultColorsBtn.addEventListener('click', defaultColorSquares)

const randomColorsBtn = document.querySelector('#random-colors-btn')
randomColorsBtn.addEventListener('click', randomColorSquares)

const etchSketchBtn = document.querySelector('#etch-sketch-btn')
etchSketchBtn.addEventListener('click', etchColorSquares)

const resetColorsBtn = document.querySelector('#reset-background-btn')
resetColorsBtn.addEventListener('click', resetBackgroundColors)