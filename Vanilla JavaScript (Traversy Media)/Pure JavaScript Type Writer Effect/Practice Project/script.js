// class TypeWriter {
//     constructor(txtElement, wordList, waitTime = 3000) {
//         this.txtElement = txtElement
//         this.wordList = JSON.parse(wordList)
//         this.waitTime = parseInt(waitTime, 10)

//         this.isDeleting = false
//         this.currentText = ''
//         this.wordIndex = 0
//         this.type()
//     }

//     type() {
//         // Get the current iterated word, this loops infinitely
//         const currentIndex = this.wordIndex % this.wordList.length
//         const fullText = this.wordList[currentIndex]

//         // Checks if the text is deleting or not
//         if (this.isDeleting) {
//             // If the text is deleting, we substring fullText until there is none left
//             this.currentText = fullText.substring(0, this.currentText.length - 1)
//         } else {
//             // If the text is typing, we subtring fullText until all of fullText is typed in
//             this.currentText = fullText.substring(0, this.currentText.length + 1)
//         }

//         // Adds the currentText in a span 
//         this.txtElement.innerHTML = `<span class="typing-text">${this.currentText}</span>`

//         // Initial typespeed
//         let typeSpeed = 300

//         // If we are deleting text, half typespeed which makes the deletion faster
//         if (this.isDeleting) {
//             typeSpeed /= 2
//         }

//         // Checks if the fullText has all been shown
//         if (!this.isDeleting && this.currentText == fullText) {
//             this.isDeleting = true // start deleting text
//             typeSpeed = this.waitTime // pause at the end of the text
//         } else if (this.isDeleting && this.currentText == '') {
//             this.isDeleting = false
//             this.wordIndex++
//             typeSpeed = 500
//         }

//         setTimeout(() => this.type(), typeSpeed)

//     }

// }


class TypeWriter {
    constructor(txtElement, wordList, waitTime = 3000) {
        this.txtElement = txtElement
        this.wordList = JSON.parse(wordList)
        this.waitTime = Number(waitTime)

        this.currentWord = ''
        this.wordIndex = 0
        this.isDeleting = false
        this.type()
    }

    type() {
        const currentIndex = this.wordIndex % this.wordList.length
        const fullText = this.wordList[currentIndex]

        if (this.isDeleting) {
            this.currentWord = fullText.substring(0, this.currentWord.length - 1)
        } else {
            this.currentWord = fullText.substring(0, this.currentWord.length + 1)
        }

        this.txtElement.innerHTML = `<span class="text-content">${this.currentWord}</span>`

        let typeSpeed = 300

        if (this.isDeleting) {
            typeSpeed /= 2
        }

        if (!this.isDeleting && this.currentWord == fullText) {
            this.isDeleting = true
            this.typeSpeed = this.waitTime
        } else if (this.isDeleting && this.currentWord == '') {
            this.isDeleting = false
            this.wordIndex++
            this.typeSpeed = 500
        }

        setTimeout(() => this.type(), typeSpeed)
    }
}

function init() {
    const txtElement = document.querySelector('.text-type')
    const wordList = txtElement.getAttribute('data-word')
    const waitTime = txtElement.getAttribute('data-wait')

    new TypeWriter(txtElement, wordList, waitTime)
}

document.addEventListener('DOMContentLoaded', init)