$(document).ready(function () {
    $('#add-product').click(function (e) {
        e.preventDefault();
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
        // const productInputs = $('#product-form').serializeArray()
        const product_id = $('#product_id').val();
        let content = ''

        const formData = new FormData();
        formData.append('product_name', $('#product-name').val());
        formData.append('product_price', $('#product-price').val());
        formData.append('description', $('#description').val());
        formData.append('photo', $('#photo').prop('files')[0]);

        if (formValidation()) {
            // If there is an id, update the record in the database
            if (product_id !== '') {
                $.ajax({
                    type: "POST",
                    url: "sqlupdate.php?what=product&id=" + product_id,
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: "json",
                    success: function (response) {
                        content += `
                        <td>${response.product_name}</td>
                        <td>${response.price}</td>
                        <td>${response.description}</td>
                        <td class="text-center">

                            <button class="btn btn-success btn-sm" onclick="editProduct(${response.id})">Edit</button> &nbsp;

                            <button class="btn btn-danger btn-sm" onclick="deleteProduct(${response.id})">Delete</button>

                        </td>`;

                        $(`#row-${response.id}`).html(content);

                        $('#add-product').text('Create Product');
                        $('#add-product').removeClass('btn-danger');
                        $('#add-product').addClass('btn-primary');

                        $('#product-inputs').fadeOut();
                        $('#product-form')[0].reset();
                    }
                });
            } else { // no value for product_id which means we add to our database
                $.ajax({
                    type: "POST",
                    url: "sqladd.php?what=product",
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: "json",
                    success: function (response) {
                        // Hiding the form and update the table showing the products
                        // console.log(response)
                        content += `
                        <tr>
                            <td>${response.product_name}</td>
                            <td>${response.price}</td>
                            <td>${response.description}</td>
                            <td class="text-center">

                                <button class="btn btn-success btn-sm" onclick="editProduct(${response.id})">Edit</button> &nbsp;

                                <button class="btn btn-danger btn-sm" onclick="deleteProduct(${response.id})">Delete</button>

                            </td>
                        </tr>`;

                        $('#product-body').append(content);

                        $('#add-product').text('Create Product');
                        $('#add-product').removeClass('btn-danger');
                        $('#add-product').addClass('btn-primary');

                        $('#product-inputs').fadeOut();
                        $('#product-form')[0].reset();
                    }
                });
            }
        }

    })

    // Add a photo and display it on the page
    $('#photo').change(function (e) {
        e.preventDefault();
        const photo = $(this).val();

        // Adds a photo
        if (photo !== '') {
            const file = this.files[0];
            const reader = new FileReader();

            reader.onload = function (event) {
                $('#img-preview').attr('src', event.target.result);
            }

            reader.readAsDataURL(file);

            $('#preview-content').removeClass('d-none');
        } else {
            $('#preview-content').addClass('d-none');
        }
    });
});

// Edit a product from the database
function editProduct(id) {
    $.ajax({
        type: "GET",
        url: "sqledit.php?what=product&id=" + id,
        dataType: "json",
        success: function (response) {
            console.log(response)
            $('#add-product').text('Cancel');
            $('#add-product').addClass('btn-danger');
            $('#add-product').removeClass('btn-primary');
            $('#product-inputs').fadeIn();
            $('#btn-submit').text('Save Changes');

            $('#product-name').val(response.product_name);
            $('#product-price').val(response.price);
            $('#description').val(response.description);
            $('#product_id').val(response.id);
        }
    });
}

// Delete a product from the database
function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        $.ajax({
            type: "DELETE",
            url: "sqldelete.php?what=product&id=" + id,
            dataType: "json",
            success: function (response) {
                let content = '';
                for (let index = 0; index < response.length; index++) {
                    const element = response[index];
                    content += `
                    <tr id="row-${element.id}">
                        <td>${element.product_name}</td>
                        <td>${element.price}</td>
                        <td>${element.description}</td>
                        <td class="text-center">

                            <button class="btn btn-success btn-sm" onclick="editProduct(${element.id})">Edit</button> &nbsp;

                            <button class="btn btn-danger btn-sm" onclick="deleteProduct(${element.id})">Delete</button>

                        </td>
                    </tr>`;

                    $('#product-body').html(content);

                    $('#add-product').text('Create Product');
                    $('#add-product').removeClass('btn-danger');
                    $('#add-product').addClass('btn-primary');

                    $('#product-inputs').fadeOut();
                    $('#product-form')[0].reset();
                }
            }
        });
    }
}

// Checks if the fields of the function are empty
function formValidation() {
    if ($('#product-name').val() == '') {
        $('#alert-box').removeClass('d-none');
        $('#alert-box').text('Product name field is required.');
        return false;
    } else if ($('#product-price').val() == '') {
        $('#alert-box').removeClass('d-none');
        $('#alert-box').text('Product price field is required.');
        return false;
    } else if ($('#description').val() == '') {
        $('#alert-box').removeClass('d-none');
        $('#alert-box').text('Description field is required.');
        return false;
    } else {
        return true;
    }
}

// Check if the inputs are empty
function checkNameInput() {
    const nameInput = $('#product-name').val();
    if (nameInput == '') {
        $('#alert-box').removeClass('d-none');
        $('#alert-box').text('Product name field is required.');
    } else {
        $('#alert-box').addClass('d-none');
        $('#alert-box').text('');
    }
}

function checkPriceInput() {
    const priceInput = $('#product-price').val();
    if (priceInput == '') {
        $('#alert-box').removeClass('d-none');
        $('#alert-box').text('Product price field is required.');
    } else {
        $('#alert-box').addClass('d-none');
        $('#alert-box').text('');
    }
}

function checkDescInput() {
    const descInput = $('#description').val();
    if (descInput == '') {
        $('#alert-box').removeClass('d-none');
        $('#alert-box').text('Description field is required.');
    } else {
        $('#alert-box').addClass('d-none');
        $('#alert-box').text('');
    }
}