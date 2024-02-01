// Variables that we will be using for our program
const gameResultContainer = document.querySelector('#game-result')
const winsContainer = document.querySelector('#wins')
const lossesContainer = document.querySelector('#losses')
const tiesContainer = document.querySelector('#ties')

let playerChoiceContainer = document.querySelector('#player-choice')
let computerChoiceContainer = document.querySelector('#computer-choice')

const resultsCard = document.querySelector('#results-card')

// Object that will store the wins, losses, and ties
const gameScore = {
    wins: 0,
    losses: 0,
    ties: 0
}

// Generating Rock, Paper, or Scissors randomly
function generateComputerMove() {

    // Storing a random number in a const variable (randomNumber)
    const randomNumber = Math.random()
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        return 'rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        return 'paper'
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        return 'scissors'
    }
}

// Evaluating the result of the game
function runGame(playerMove, computerMove) {

    // Creating a gameResult variable to stor the result
    let gameResult = ''

    if (playerMove === computerMove) {
        gameResult = 'Tie'
        gameScore.ties += 1
        resultsCard.classList.add('bg-secondary')
    } else if (
        (playerMove == 'rock' && computerMove == 'scissors') ||
        (playerMove == 'paper' && computerMove == 'rock') ||
        (playerMove == 'scissors' && computerMove == 'paper')) {

        gameResult = 'You win!'
        gameScore.wins += 1
        resultsCard.classList.add('bg-success')
    } else {
        gameResult = 'You lose!'
        gameScore.losses += 1
        resultsCard.classList.add('bg-danger')
    }

    // For debugging purposes
    // console.log(`Player: ${playerMove}`)
    // console.log(`Computer: ${computerMove}`)
    // console.log(gameScore)

    // Showing player and computer choices
    playerChoiceContainer.innerText = `Player: ${playerMove}`
    computerChoiceContainer.innerText = `Computer: ${computerMove}`

    // Updating the wins, losses, ties, and game result
    winsContainer.innerText = `Wins: ${gameScore.wins}`
    lossesContainer.innerText = `Losses: ${gameScore.losses}`
    tiesContainer.innerText = `Ties: ${gameScore.ties}`
    gameResultContainer.innerText = gameResult
}

// Using event delegation to optimize the program
document.querySelector('#game-container').addEventListener('click', (event) => {
    // Get the id of the clicked element
    const targetId = event.target.id
    let playerMove = ''

    switch (targetId) {
        case 'rock':
            playerMove = 'rock'
            break
        case 'paper':
            playerMove = 'paper'
            break
        case 'scissors':
            playerMove = 'scissors'
            break
    }

    // Generating a random computerMove
    const computerMove = generateComputerMove()

    // Evaluating the game, check if the player made a valid move
    if (playerMove != '') {
        // Remove card styles from last round
        resultsCard.classList.remove('bg-secondary')
        resultsCard.classList.remove('bg-success')
        resultsCard.classList.remove('bg-danger')

        // Run the game and compare player and computer moves
        runGame(playerMove, computerMove)

        // Showing the results-card
        resultsCard.classList.remove('d-none')

        // Show the reset button
        document.querySelector("#reset-btn").classList.remove('d-none')
    }

})

// Reset button, resets gameScore attributes and removes wins, losses, etc.
document.querySelector("#reset-btn").addEventListener('click', () => {
    // Reset gameScore attributes
    gameScore.wins = 0
    gameScore.losses = 0
    gameScore.ties = 0

    // Reset the results containers' text
    playerChoiceContainer.innerText = ''
    computerChoiceContainer.innerText = ''
    winsContainer.innerText = ''
    lossesContainer.innerText = ''
    tiesContainer.innerText = ''
    gameResultContainer.innerText = ''

    // Hide the results-card and reset-btn
    document.querySelector("#reset-btn").classList.add('d-none')
    resultsCard.classList.add('d-none')
})

// Evaluating the game whenever the player chooses a choice
// document.querySelector('#rock').addEventListener('click', () => {
//     const playerMove = 'rock'
//     const computerMove = generateComputerMove()
//     runGame(playerMove, computerMove)
// })
// document.querySelector('#paper').addEventListener('click', () => {
//     playerMove = 'paper'
//     const computerMove = generateComputerMove()
//     runGame(playerMove, computerMove)
// })
// document.querySelector('#scissors').addEventListener('click', () => {
//     playerMove = 'scissors'
//     const computerMove = generateComputerMove()
//     runGame(playerMove, computerMove)
// })