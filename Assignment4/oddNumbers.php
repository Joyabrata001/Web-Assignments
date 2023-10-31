<?php
$N = isset($_GET['N']) ? $_GET['N'] : 0;

if ($N <= 0)
    echo 'No odd-numbers to show';
else {
    echo '<div class="output-grid">';
    for ($i = 1; $i <= $N; $i += 2) {
        echo '<div class="output-item">' . $i . '</div>';
    }
    echo '</div>';
}
?>