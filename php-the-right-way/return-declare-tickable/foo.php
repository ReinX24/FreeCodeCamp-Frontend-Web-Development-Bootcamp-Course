<?php

require 'index.php';

echo sum(5, 10);
echo sum('5', 10); // does not throw an error, this is because the strict types
// is only applied to the script it is on
