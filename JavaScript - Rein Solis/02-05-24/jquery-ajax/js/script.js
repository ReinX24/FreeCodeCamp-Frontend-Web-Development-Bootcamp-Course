$(document).ready(function () {
    $('#add-product').click(function (e) {
        e.preventDefault();
        // $('#product-inputs').removeClass('d-none')
        $('#product-inputs').fadeToggle(function () {
            if ($('#product-inputs').is(':visible')) {
                $('#add-product').text('Cancel')
                $('#add-product').removeClass('btn-primary')
                $('#add-product').addClass('btn-danger')
            } else {
                $('#add-product').text('Create Product')
                $('#add-product').removeClass('btn-danger')
                $('#add-product').addClass('btn-primary')
            }
        })
    });

    $('#btn-submit').click(function (e) {
        e.preventDefault()
        let productInputs = $('#product-form').serializeArray()

        $.ajax({
            type: "POST",
            url: "sqladd.php?what=product",
            data: productInputs,
            dataType: "json",
            success: function (response) {

            }
        });
    })
});