// const TypeWriter = function (txtElement, words, waitTime = 3000) {
//     this.txtElement = txtElement
//     this.words = words
//     this.currentText = '' // this will be where the word shown will be stored
//     this.wordIndex = 0
//     this.waitTime = parseInt(waitTime, 10)
//     this.type() // calls the type function in this function
//     this.isDeleting = false
// }

// // Type Method, adding a type method to our TypeWriter function
// TypeWriter.prototype.type = function () {
//     // Current index of words
//     const currentIndex = this.wordIndex % this.words.length
//     // Get full text of currentWord
//     const fullText = this.words[currentIndex]

//     // Check if deleting
//     if (this.isDeleting) {
//         // Remove the char
//         this.currentText = fullText.substring(0, this.currentText.length - 1)
//     } else {
//         // Add a char 
//         this.currentText = fullText.substring(0, this.currentText.length + 1)
//     }

//     // Insert currentText into txtElement
//     this.txtElement.innerHTML = `<span class="txt">${this.currentText}</span>`

//     // Initial Type Speed
//     let typeSpeed = 300

//     // When we are deleting characters, we go faster
//     if (this.isDeleting) {
//         typeSpeed /= 2
//     }

//     // If currentText is complete
//     if (!this.isDeleting && this.currentText === fullText) {
//         // Make a pause at end 
//         typeSpeed = this.waitTime
//         // Set isDeleting to true
//         this.isDeleting = true
//     } else if (this.isDeleting && this.currentText === '') {
//         this.isDeleting = false
//         // Move to next word
//         this.wordIndex++
//         // Pause before we start typing
//         typeSpeed = 500
//     }

//     setTimeout(() => this.type(), typeSpeed)
// }

// ES6 Class
class TypeWriter {
    constructor(txtElement, words, waitTime = 3000) {
        this.txtElement = txtElement
        this.words = words
        this.currentText = '' // this will be where the word shown will be stored
        this.wordIndex = 0
        this.waitTime = parseInt(waitTime, 10)
        this.type() // calls the type function in this function
        this.isDeleting = false
    }

    type() {
        // Current index of words
        const currentIndex = this.wordIndex % this.words.length
        // Get full text of currentWord
        const fullText = this.words[currentIndex]

        // Check if deleting
        if (this.isDeleting) {
            // Remove the char
            this.currentText = fullText.substring(0, this.currentText.length - 1)
        } else {
            // Add a char 
            this.currentText = fullText.substring(0, this.currentText.length + 1)
        }

        // Insert currentText into txtElement
        this.txtElement.innerHTML = `<span class="txt">${this.currentText}</span>`

        // Initial Type Speed
        let typeSpeed = 300

        // When we are deleting characters, we go faster
        if (this.isDeleting) {
            typeSpeed /= 2
        }

        // If currentText is complete
        if (!this.isDeleting && this.currentText === fullText) { 
            // Set isDeleting to true
            this.isDeleting = true
            // Make a pause at end 
            this.typeSpeed = this.waitTime
        } else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false
            // Move to next word
            this.wordIndex++
            // Pause before we start typing
            typeSpeed = 500
        }

        setTimeout(() => this.type(), typeSpeed)
    }

}

// Init on DOM load
document.addEventListener('DOMContentLoaded', init)

// Init app
function init() {
    const txtElement = document.querySelector('.txt-type')
    const words = JSON.parse(txtElement.getAttribute('data-words')) // .parse turns it into a JavaScript array
    const waitTime = txtElement.getAttribute('data-wait')
    // Init TypeWriter
    new TypeWriter(txtElement, words, waitTime)
}