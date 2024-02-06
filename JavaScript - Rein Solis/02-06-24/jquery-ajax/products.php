<?php 
    require_once('functions.php');
    do_header();
    
    $products = getData("select * from products where 1");
    // print_r($products);
?>

<main class="container">
    <div class="row" style="display: none;" id="product-inputs">
        <div class="col-8 d-grid gap-2 mx-auto">

            <div class="card">
                <div class="card-header"><h4>Product Information</h4></div>
                <div class="card-body">

                    <div class="alert alert-danger d-none" role="alert" id="alert-box"></div>

                    <!-- Product form -->
                    <form id="product-form">
                        <!-- Product Name and Product Price -->
                        <div class="row mb-3">
                            <!-- 2 input fields beside each other -->
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="product-name" class="form-label">Product Name</label>
                                    <input type="text" name="product_name" id="product-name" class="form-control" onkeyup="checkNameInput()">
                                </div>
                            </div>

                            <div class="col-6">
                                <label for="product-price" class="form-label">Product Price</label>
                                <input type="number" name="product_price" id="product-price" class="form-control" onkeyup="checkPriceInput()">
                            </div>
                        </div>

                        <!-- Feature Photo -->
                        <div class="form-group mb-3">
                            <div id="preview-content" class="d-none text-center">
                                <img src="#" id="img-preview" style="width: 250px; height: auto;">
                            </div>

                            <label for="photo" class="form-label">Feature Photo</label>
                            <input type="file" name="photo" id="photo" class="form-control">
                        </div>

                        <!-- Product Description -->
                        <div class="form-group mb-3">
                            <label for="description" class="form-label">Product Description</label>
                            <textarea name="description" id="description" style="height: 50px; resize:none;" rows="10" class="form-control" onkeyup="checkDescInput()"></textarea>
                        </div>

                        <!-- Submit button -->
                        <div class="d-flex justify-content-end mt-3">
                            <input type="hidden" name="product_id" id="product_id">
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
                <tbody id="product-body">
                    <?php foreach($products as $product) {?>
                    <tr id="row-<?php echo $product['id']?>">
                        <td><?php echo $product['product_name']; ?></td>
                        <td><?php echo $product['price']; ?></td>
                        <td><?php echo $product['description']; ?></td>
                        <td class="text-center">
                            <button class="btn btn-success btn-sm" onclick="editProduct(<?php echo $product['id']; ?>)">Edit</button> &nbsp;
                            <button class="btn btn-danger btn-sm" onclick="deleteProduct(<?php echo $product['id']; ?>)">Delete</button>
                        </td>
                    </tr>
                    <?php } ?>
                </tbody>
            </table>

        </div>
    </div>

</main>


<?php 
    getjQuery();
    do_footer();
?>