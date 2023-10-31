<?php
$numbersArray = isset($_GET['inputNumbers']) ? $_GET['inputNumbers'] : "";
$sortOrder = isset($_GET['sortOrder']) ? $_GET['sortOrder'] : "";

$numbersArray = explode(" ", $numbersArray);

echo "Raw Input Array: " . implode(" ", $numbersArray) . "<br>";

if ($sortOrder === 'asc' || $sortOrder === '') {
    sort($numbersArray);
    echo "Numbers after sorting in ascending order: " . implode(" ", $numbersArray) . "<br>";
}
if ($sortOrder === 'dsc' || $sortOrder === '') {
    rsort($numbersArray);
    echo "Numbers after sorting in descending order: " . implode(" ", $numbersArray) . "<br>";
}
?>