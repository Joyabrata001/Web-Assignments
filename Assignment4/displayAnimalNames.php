<?php
$n = isset($_GET['N']) ? $_GET['N'] : 0;

if ($n <= 0) {
    echo 'No animal names to show';
    return;
}

$animalNames = array(
    "Dog", "Cat", "Horse", "Cow", "Sheep", "Pig", "Goat", "Chicken", "Turkey", "Rabbit", "Hamster", "Guinea pig",
    "Chinchilla", "Ferret", "Snake", "Peacock", "Turtle", "Frog", "Toad", "Alligator", "Crocodile", "Shark", "Dolphin", 
    "Whale", "Orca", "Penguin", "Elephant", "Lion", "Tiger", "Bear", "Zebra", "Hippopotamus", "Giraffe", "Rhinoceros",
    "Kangaroo", "Koala", "Panda", "Gorilla", "Chimpanzee", "Orangutan",
);

if ($n > count($animalNames)) {
    echo "Sorry, cannot show more than " . count($animalNames) . " names. Here they are: <br><br>";
    $n = count($animalNames);
} else {
    echo "Here are the " . $n . " names: <br><br>";
}

shuffle($animalNames);

// $selectedNames = array_slice($animalNames, 0, $n);

// echo implode(', ', $selectedNames);
// for ($i = 0; $i < $n-1; $i++) {
//     echo $animalNames[$i] . str_repeat('&nbsp;', 5);
// }
// echo $animalNames[$n-1];
echo '<div class="output-grid">';
$selectedNames = array_slice($animalNames, 0, $n);
foreach ($selectedNames as $name) {
    echo '<div class="output-item">' . $name . '</div>';
}
echo '</div>';
?>