// Checks if the document has finished loading
$(document).ready(function () {

    // Loading html file contents using ajax
    // $('#result').load('test.html', function (responseText, statusText, xhr) {
    //     // Evaluating if the content is loaded or not
    //     if (statusText == 'success') {
    //         alert('It went fine')
    //     } else if (statusText == 'error') {
    //         alert('Error: ' + xhr.statusText) // file not found
    //     }
    // })

    // Get method
    // $.get('test.html', function (data) {
    //     $('#result').html(data)
    // })

    // Getting json content and adding json content to our DOM
    // $.getJSON('users.json', function (data) {
    //     $.each(data, function (i, user) {
    //         $('#users').append(`<li>${user.firstName} ${user.lastName}</li>`)
    //     })
    // })

    // Getting json content using the ajax method from an external source
    // $.ajax({
    //     method: 'GET',
    //     url: 'https://jsonplaceholder.typicode.com/posts',
    //     dataType: 'json',
    // }).done(function (data) {
    //     // console.log(data)
    //     $.map(data, function (post, i) {
    //         $('#result').append(`
    //         <h3>${post.title}</h3>
    //         <p>${post.body}</p>
    //         `)
    //     })
    // })

    // Making a post request
    $('#postForm').submit(function (e) {
        e.preventDefault() // prevents default form behavior
        const title = $('#title').val()
        const body = $('#body').val()
        const url = $(this).attr('action')

        // Post the data and show updated data
        $.post(url, { title: title, body: body }).done(function (data) {
            console.log('Post Saved!')
            console.log(data)
        })
    })

})
