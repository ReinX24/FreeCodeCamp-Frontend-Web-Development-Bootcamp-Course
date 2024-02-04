// Checks if the document has finished loading
$(document).ready(function () {

    $('#btnFadeOut').on('click', function () {
        // $('#box').fadeOut()
        // $('#box').fadeOut('fast')
        // $('#box').fadeOut('slow')
        // $('#box').fadeOut(3000) // fading out takes 3000ms or 3 seconds
        $('#box').fadeOut(3000, function () {
            $('#btnFadeOut').text('Its gone') // executes after 3 seconds
        })
    })

    $('#btnFadeIn').on('click', function () {
        $('#box').fadeIn(3000)
    })

    $('#btnFadeTog').on('click', function () {
        $('#box').fadeToggle(3000)
    })

    // Adding click listeners to our slide buttons
    $('#btnSlideUp').on('click', function () {
        $('#box').slideUp(3000)
    })

    $('#btnSlideDown').on('click', function () {
        $('#box').slideDown(3000)
    })

    $('#btnSlideTog').on('click', function () {
        $('#box').slideToggle(3000)
    })

    $('#btnStop').on('click', function () {
        $('#box').stop() // stops animation
    })

    // Move button click listeners

    // move element to the right
    $('#moveRight').on('click', function () {
        $('#box-2').animate({
            left: 500, // move element 500 pixels from the left
            height: '300px',
            width: '300px',
            opacity: '0.5'
        })
    })

    // move elements to the left or back to its original position
    $('#moveLeft').on('click', function () {
        $('#box-2').animate({
            left: 0,
            height: '100px',
            width: '100px',
            opacity: '1'
        })
    })

    // Doing multiple animations at once
    $('#moveAround').on('click', function () {
        const box = $('#box-2')
        // Move the box in a square manner
        box.animate({
            left: 300,
        })
        box.animate({
            top: 300,
        })
        box.animate({
            left: 0,
            top: 300
        })
        box.animate({
            left: 0,
            top: 0,
        })
    })
})
