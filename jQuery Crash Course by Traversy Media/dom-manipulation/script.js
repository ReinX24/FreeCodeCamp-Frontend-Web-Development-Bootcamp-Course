// Checks if the document has finished loading
$(document).ready(function () {

    // Applying a css attribute
    // $('.para-1').css('color', 'red')

    // Applying multiple CSS attributes
    // $('p.para-1').css({
    //     color: 'red',
    //     background: '#ccc'
    // })

    // Adding and removing a class to an element
    // $('p.para-2').addClass('myClass')
    // $('p.para-2').removeClass('myClass')

    // Toggling classes
    // $('button#btn-1').on('click', function () {
    //     $('p.para-2').toggleClass('myClass')
    // })

    // Modifying element contents
    // $('#myDiv').text('Hello World')
    // $('#myDiv').html('<h1>Hello World</h1>')
    // alert($('#myDiv').text())

    // Adding elements to an element
    // $('ul').append('<li>Append List Item</li>')
    // $('ul').prepend('<li>Prepend List Item</li>')

    // Moves para-1 element to inside para-2
    // $('.para-1').appendTo('.para-2')

    // Moves para-2 element within para-1
    // $('.para-1').prependTo('.para-2')

    // Adds elements before and after an element
    // $('ul').before('<h4>Before List</h4>')
    // $('ul').after('<h4>After List</h4>')

    // Removing all the inner elements of our list
    // $('ul').empty()

    // Removing an element from the list and 
    // $('ul').detach()

    // Adding attributes to elements
    // $('a').attr('target', '_blank') // link opens in a new tab
    // alert($('a').attr('href')) // returns the href value of the element
    // $('a').removeAttr('target', '_blank') // remove attribute

    // Wraps all p elements inside h1 elements
    // $('p').wrap('<h1>')

    // Wraps all p elements inside one h1 element
    // $('p').wrapAll('<h1>')

    // Keyup event
    // $('#newItem').keyup(function (e) {
    // const code = e.which // gets the keycode
    // Checks if the current keycode is Enter
    //     if (code == 13) {
    //         e.preventDefault()
    //         $('ul').append(`<li>${e.target.value}</li>`)
    //     }
    // })

    // Adding array elements to our webpage
    const myArr = ['Rein', 'Akira', 'Reinne', 'Trinia', 'Michaella']
    $.each(myArr, function (index, val) {
        // console.log(`${index} ${val}`)
        $('#users').append(`<li>${val}</li>`)
    })

    // Getting list elements from our webpage
    const myItems = $('#myList li').toArray() // gets all list items
    // console.log(myItems)
    $.each(myItems, function (i, val) {
        console.log(val.innerHTML)
    })
})
