<?php
    require_once('func_select.php');
    function do_header() { 
?>
    
<!doctype html>
<html lang="en" data-bs-theme="auto">

<head>
    <!-- Boostrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <!-- <link rel="stylesheet" href="css/bootstrap.css"> -->

    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Fixed navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">

                    <li class="nav-item">
                        <a class="nav-link <?php echo(basename($_SERVER['REQUEST_URI']) === 'index.php')? 'active' : ''?>" aria-current="page" href="index.php">Index</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link <?php echo(basename($_SERVER['REQUEST_URI']) === 'products.php')? 'active' : ''?>" href="products.php">Products</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link <?php echo(basename($_SERVER['REQUEST_URI']) === 'customers.php')? 'active' : ''?>" href="customers.php">Customers</a>
                    </li>

                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
<?php }?>

<?php function getjQuery() { ?>
        <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
        <!-- <script src="js/jquery.min.js"></script> -->
<?php }?>

<?php function do_footer() { ?>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <!-- <script src="js/bootstrap.bundle.js"></script> -->
        <script src="js/script.js"></script>
    </body>
</html>
<?php }?>