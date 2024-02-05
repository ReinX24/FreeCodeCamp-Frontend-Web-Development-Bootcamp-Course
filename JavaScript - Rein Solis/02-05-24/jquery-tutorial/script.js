// Checks if the DOM is loaded
$(document).ready(function () {

    // Getting the value of an input element
    // const inputCharacter = $('#fName').val()
    // alert(inputCharacter)

    // Adding a click function to a button
    $('#click-me').click(function (e) {
        // Prevents default submit function of forms (refreshes the page)
        e.preventDefault();

        // Fades in and out the photo
        // $('#one-piece-img').fadeToggle(2000)

        // Changes the background color of an element
        // $('#div-1').css('background-color', 'red')
        // $('#div-1').css('color', 'white')

        // Changes the inner HTML of an element
        // $('#div-1').html('I changed the content.')

        // Setting value to an input element
        // $('#fName').val('Luffy')

        // Adding and removing classes from an element
        // $('#div-1').addClass('hello-world')
        // $('#div-1').removeClass('div-style')
    });

    $('#btn-submit').click(function (e) {
        e.preventDefault() // prevents the form from submitting

        // Create a person object and get the input values
        const person = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val()
        }

        console.log(person)
    })
})
