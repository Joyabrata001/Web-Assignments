<?php
$marks = isset($_GET['marks']) ? $_GET['marks'] : 0;

if ($marks < 0 && $marks > 100) {
    echo "Marks out of range";
} elseif ($marks >= 90 && $marks < 101) {
    echo "Grade: A+";
} elseif ($marks >= 80) {
    echo "Grade: A";
} elseif ($marks >= 70) {
    echo "Grade: B";
} elseif ($marks >= 60) {
    echo "Grade: C";
} else {
    echo "Grade: F";
}
?>