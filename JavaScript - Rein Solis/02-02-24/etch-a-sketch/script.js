function createSquares() {

    const body = document.querySelector('body')
    const container = document.createElement('div')
    container.classList.add('container')

    const gridSides = 5
    const screenTotal = 1000

    container.style.width = `${screenTotal}px`
    container.style.height = `${screenTotal}px`

    for (let i = 0; i < 16; i++) {
        const square = document.createElement('div')
        square.classList.add('square')

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'blue'
        })

        square.addEventListener('mouseout', () => {
            square.style.backgroundColor = ''
        })

        container.appendChild(square)
    }

    body.appendChild(container)

}

window.onload = createSquares