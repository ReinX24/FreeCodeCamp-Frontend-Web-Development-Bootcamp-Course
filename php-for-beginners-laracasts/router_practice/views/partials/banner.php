<div class="container col-8 p-4">
    <h1><?= $heading; ?></h1>
    <hr>
    <p>Welcome to the
        <?php if (urlIs('/')) : ?>
            home
        <?php elseif (urlIs('/about')) : ?>
            about
        <?php elseif (urlIs('/contact')) : ?>
            contact
        <?php endif; ?>
        page.</p>
</div>