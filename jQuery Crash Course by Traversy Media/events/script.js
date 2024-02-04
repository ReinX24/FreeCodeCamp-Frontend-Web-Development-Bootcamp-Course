// Checks if the document has finished loading
$(document).ready(function () {

    // Adding click events to buttons
    // $('#btn-1').click(function () {
    //     alert('Button Clicked!')
    // })

    // Another way of adding an event to a button
    // $('#btn-1').on('click', function () {
    //     alert('Button Clicked!')
    // })

    // Hiding the text of para-1 when btn-1 is clicked
    // $('#btn-1').on('click', function () {
    //     $('.para-1').hide()
    // })

    // Shows para-1 back to webpage
    // $('#btn-2').on('click', function () {
    //     $('.para-1').show()
    // })

    // Hides and shows the button when the button is clicked repeatedly
    // $('#btn-1').on('click', function () {
    //     $('.para-1').toggle()
    // })

    // Double click events
    // $('#btn-1').dblclick(function () {
    //     $('.para-1').toggle()
    // })

    // Hover, hides para-1 when the button is hovered over
    // $('#btn-1').hover(function () {
    //     $('.para-1').toggle()
    // })

    // Does not work, because hover is not an event, it is a combination of two
    // events which are mouseenter and mouseleave
    // $('#btn-1').on('hover', function () {
    //     $('.para-1').toggle()
    // })

    // $('#btn-1').on('mouseenter', function () {
    //     $('.para-1').toggle()
    // })

    // $('#btn-1').on('mouseleave', function () {
    //     $('.para-1').toggle()
    // })

    // mousemove, triggers when the mouse is moved within the element
    // $('#btn-1').on('mousemove', function () {
    //     $('.para-1').toggle()
    // })

    // $('#btn-1').on('mousedown', function () {
    //     $('.para-1').toggle()
    // })

    // $('#btn-1').on('mouseup', function () {
    //     $('.para-1').toggle()
    // })

    // Selecting and printing event
    // $('#btn-1').click(function (e) {
    // console.log(e)
    // alert(e.currentTarget.id) // prints the element's id
    // alert(e.currentTarget.innerHTML)
    // alert(e.currentTarget.outerHTML)
    // alert(e.currentTarget.className)
    // })

    // Print the position of the currently pointed at element
    // $(document).on('mousemove', function (e) {
    //     $('#coords').html(`Cords: ${e.clientY} ${e.clientX}`)
    // })

    // Executes whenever an input is focused / clicked on by a user
    // $('input').focus(function () {
    // alert('Focus')
    //     $(this).css('background', 'pink') // modifies background of focused input
    // })

    // Blur event, when we click outside of the element
    // $('input').blur(function () {
    //     $(this).css('background', 'white')
    // })

    // Keyup and keydown events
    // $('input').keyup(function (e) {
    // console.log('keyup')
    //     console.log(e.currentTarget.value) // prints the value in input element
    // })

    // $('select#gender').change(function (e) {
    // alert('Changed')
    //     alert(e.target.value)
    // })

    $('#form').submit(function (e) {
        e.preventDefault() // prevents form from submitting and reloading page
        // console.log('Submitted')
        const name = $('#name').val()
        const email = $('#email').val()
        const gender = $('#gender').val()
        console.log(`${name} ${email} ${gender}`)
    })

})