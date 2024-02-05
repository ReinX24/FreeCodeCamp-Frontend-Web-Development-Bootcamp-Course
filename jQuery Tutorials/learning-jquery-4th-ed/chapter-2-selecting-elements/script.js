$(document).ready(function () {
    // Shakespeare's plays section
    $('tr:nth-child(odd)').addClass('alt') // starts with the first element
    $('td:contains(Henry)').addClass('highlight') // elements that contain 'Henry'

    // Selected plays section
    // Selects child li elements of selected-plays
    $('#selected-plays > li').addClass('horizontal')

    // Selects li elements within selected-plays without the horizontal class
    $('#selected-plays li:not(.horizontal)').addClass('sub-level')

    // Finding an href element that where the href starts with 'mailto'
    $('a[href^="mailto:"]').addClass('mailto')

    // Finds element where the hred ends with '.pdf'
    $('a[href$=".pdf"]').addClass('pdflink')

    // Selects all elements that starts with'http' and contains 'henry'
    $('a[href^="http"][href*="henry"]').addClass('henrylink')
})