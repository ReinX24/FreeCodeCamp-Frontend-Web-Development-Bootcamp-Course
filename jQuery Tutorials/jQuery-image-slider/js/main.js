$(window).on('load', function () {

    // Adding click listeners
    $('.next').on('click', function () {
        const currentImg = $('.active')
        const nextImg = currentImg.next()

        if (nextImg.length) {
            currentImg.fadeOut(500, function () {

                currentImg.removeClass('active').css('z-index', -10)

                nextImg.fadeIn(500, function () {
                    nextImg.addClass('active').css('z-index', 10)
                })

            })
        }
    })

    $('.prev').on('click', function () {
        const currentImg = $('.active')
        const prevImg = currentImg.prev()

        if (prevImg.length) {
            currentImg.fadeOut(500, function () {

                currentImg.removeClass('active').css('z-index', -10)

                prevImg.fadeIn(500, function () {
                    prevImg.addClass('active').css('z-index', 10)
                })

            })
        }
    })
})