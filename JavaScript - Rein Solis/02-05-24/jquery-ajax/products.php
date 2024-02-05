<?php 
    require_once('functions.php');
    do_header();
?>

<main class="container">
    <div class="row" style="display: none;" id="product-inputs">
        <div class="col-8 d-grid gap-2 mx-auto">

            <div class="card">
                <div class="card-header"><h4>Product Information</h4></div>
                <div class="card-body">

                    <form id="product-form">
                        <!-- Product Name and Product Price -->
                        <div class="row mb-3">
                            <!-- 2 input fields beside each other -->
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="product-name" class="form-label">Product Name</label>
                                    <input type="text" name="product_name" id="product-name" class="form-control">
                                </div>
                            </div>

                            <div class="col-6">
                                <label for="product-price" class="form-label">Product Price</label>
                                <input type="number" name="product_price" id="product-price" class="form-control">
                            </div>
                        </div>

                        <!-- Feature Photo -->
                        <div class="form-group mb-3">
                            <label for="photo" class="form-label">Feature Photo</label>
                            <input type="file" name="photo" id="photo" class="form-control">
                        </div>

                        <!-- Product Description -->
                        <div class="form-group mb-3">
                            <label for="description" class="form-label">Product Description</label>
                            <textarea name="description" id="description" style="height: 15px; resize:none;" rows="10" class="form-control"></textarea>
                        </div>

                        <!-- Submit button -->
                        <div class="d-flex justify-content-end mt-3">
                            <button class="btn btn-primary" id="btn-submit">Submit</button>
                        </div>

                    </form>
                </div> <!-- End of card body -->
            </div> <!-- End of card -->

        </div>
    </div>

    <div class="row mt-5">
        <div class="col-12">
            <!-- Create Product button -->
            <div class="d-flex justify-content-end">
                <button class="btn btn-primary btn-sm" id="add-product">Create Product</button>
            </div>

            <!-- Table containing products -->
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Product Description</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>

</main>


<?php 
    getjQuery();
    do_footer();
?>