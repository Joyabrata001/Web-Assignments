<?php
$n = isset($_GET['N']) ? $_GET['N'] : 0;

if ($n <= 0) {
    echo 'No animal images to show';
    return;
}

$animals = array(
    "Dog", "Cat", "Horse", "Cow", "Sheep", "Pig", "Goat", "Chicken", "Turkey", "Rabbit", "Hamster", "Guinea pig",
    "Chinchilla", "Ferret", "Snake", "Peacock", "Turtle", "Frog", "Toad", "Alligator", "Crocodile", "Shark", "Dolphin", 
    "Whale", "Orca", "Penguin", "Elephant", "Lion", "Tiger", "Bear", "Zebra", "Hippopotamus", "Giraffe", "Rhinoceros",
    "Kangaroo", "Koala", "Panda", "Gorilla", "Chimpanzee", "Orangutan",
);

if ($n > count($animals)) {
    echo "Sorry, cannot show more than " . count($animals) . " animals. Here they are: <br><br>";
    $n = count($animals);
} else {
    echo "Here are the " . $n . " animals: <br><br>";
}

shuffle($animals);

$imagePath = "./assets/images/animals/";

echo '<div class="output-grid">';
$selectedAnimals = array_slice($animals, 0, $n);
foreach ($selectedAnimals as $animal) {
    echo '<div class="output-item">';
    $imageName = strtolower(str_replace(' ', '_', $animal)) . '.jpg';
    $imageURL = $imagePath . $imageName;
    echo '<img src="' . $imageURL . '" alt="' . $animal . '">';
    echo '<p>' . $animal . '</p>';
    echo '</div>';
}
echo '</div>';
?>