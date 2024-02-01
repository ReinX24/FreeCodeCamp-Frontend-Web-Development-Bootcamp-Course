// Generating a random number between 0 and 1
// console.log(Math.random())

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
    if (playerMove === computerMove) {
        console.log('Tie')
    } else if (playerMove == 'rock' && computerMove == 'scissors') {
        console.log('You win!')
    } else if (playerMove == 'paper' && computerMove == 'rock') {
        console.log('You win!')
    } else if (playerMove == 'scissors' && computerMove == 'paper') {
        console.log('You win!')
    } else {
        console.log('You lose!')
    }
}

// document.querySelector('#result-container').addEventListener('click', (event) => { 
//     const target = event.target
// })

document.querySelector('#rock').addEventListener('click', () => {
    const playerMove = 'rock'
    const computerMove = generateComputerMove()
    runGame(playerMove, computerMove)
})
document.querySelector('#paper').addEventListener('click', () => {
    playerMove = 'paper'
    const computerMove = generateComputerMove()
    runGame(playerMove, computerMove)
})
document.querySelector('#scissors').addEventListener('click', () => {
    playerMove = 'scissors'
    const computerMove = generateComputerMove()
    runGame(playerMove, computerMove)
})