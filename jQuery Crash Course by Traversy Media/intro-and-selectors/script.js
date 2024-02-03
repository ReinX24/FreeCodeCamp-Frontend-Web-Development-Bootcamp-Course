// jQuery Selectors

// Hide all h1 elements
// $('h1').hide();

// Hide a h1 element with an id of heading1
// $('h1#heading1').hide()

// Selecting an h1 element with a class of heading2
// $('h1.heading2').hide()
// $('.heading2').hide()

// Selects span elements within p elements and changes font color
// $('p span').css('color', 'red')

// Selecting the list elements
// Changes the color of the first list item in a list
// $('ul#list li:first').css('color', 'red')
// $('ul#list li:last').css('color', 'green')

// Target even and odd elements in our list
// $('ul#list li:even').css('background-color', 'yellow')
// $('ul#list li:odd').css('background-color', '#cccccc')

// Target specific child elements 
// Removes every third list item bullet points
// $('ul#list li:nth-child(3n)').css('list-style', 'none')

// Selecting type selector
// Hide all inputs with a type of button
// $(':button').hide()
// $(':submit').hide() // type of submit
// $(':text').hide() // type of text

// Change all elements with an href attributes
$('[href]').css('color', 'red') // changes link colors to red
// Targeting an element with a specific href
$('a[href="http://yahoo.com"]').css('color', 'green') // changes link color to green

// $('*').hide() // hides all elements