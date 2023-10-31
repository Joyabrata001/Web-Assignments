<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = isset($_POST['inputEmail4']) ? $_POST['inputEmail4'] : "";
  $password = isset($_POST['inputPassword4']) ? $_POST['inputPassword4'] : "";
  $address = isset($_POST['inputAddress']) ? $_POST['inputAddress'] : "";
  $address2 = isset($_POST['inputAddress2']) ? $_POST['inputAddress2'] : "";
  // $country = isset($_POST['inputCountry']) ? $_POST['inputCountry'] : "";
  // $state = isset($_POST['inputState']) ? $_POST['inputState'] : "";
  $city = isset($_POST['inputCity']) ? $_POST['inputCity'] : "";
  $zip = isset($_POST['inputZip']) ? $_POST['inputZip'] : "";
  // $file = isset($_FILES['formFile']) ? $_FILES['formFile'] : "";
  $ackMail = isset($_POST['inlineRadioOptions']) ? $_POST['inlineRadioOptions'] : "";
  $ackTC = isset($_POST['checkTC']) ? $_POST['checkTC'] : "";
  $random = rand(0, 100);

  // Handling uploaded file
  if (isset($_FILES['formFile'])) {
    $file = $_FILES['formFile'];
    $filename = $file['name'];
    $filetmp = $file['tmp_name'];
    $filetype = $file['type'];

    // Check if the file is of an allowed type
    $allowedTypes = array('application/pdf', 'image/jpeg', 'image/jpg', 'image/png');
    if (in_array($filetype, $allowedTypes)) {
      // Specify the directory where you want to save the file
      $uploadDir = 'C:/xampp/htdocs/joy/Assignment4/received_files/';
      $destination = $uploadDir . $filename;

      // Move the file to the desired directory
      move_uploaded_file($filetmp, $destination);
    }
  }
  if (empty($email) && empty($password) && empty($address) && empty($address2) && empty($city) && empty($zip)) {
    echo "<p style='color: red; display: flex; justify-content: center; margin: auto; text-align: center;'>Fill up the form before submittting</p>";
    return;
  } elseif (empty($email) || empty($password) || empty($address) || empty($address2) || empty($city) || empty($zip)) {
    echo "<p style='color: red; display: flex; justify-content: center; margin: auto; text-align: center;'>Form not completely filled</p>";
  } elseif (empty($ackTC)) {
    echo "<p style='color: red; display: flex; justify-content: center; margin: auto; text-align: center;'>Sorry, but you have to agree to the terms and conditions</p>";
    return;
  } else {
    echo "<div class='formEditing'>";
    echo "<form class='row g-0'>";
    echo "<div class='col-12'></div>";
    echo "<div class='col-12'></div>";
    if ($random < 0) {
      echo "<div class='col-12 text-center' style='color: red; font-size: 40px;'><strong>Sorry! Better luck next time</strong></div>";
    } else {
      echo "<div class='col-12 text-center'>";
      echo "<div class='col-12 text-center' style='color: green; font-size: 40px;'><strong>Here's your reward!</strong></div>";
      echo "<img src='./assets/images/qr-code.jpg' alt='qr-code' style='max-width: 25%; height: auto;'>";
      echo "</div>";
    }
    echo "<br>";
    echo "<div class='col-12 text-center' style='color: green; font-size: 30px;'><strong>Here's your submitted info</strong></div>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<div class='col-md-6'><strong>Email:</strong> $email</div>";
    echo "<div class='col-md-6'><strong>Password:</strong> $password</div>";
    echo "<div class='col-12'><strong>Address Line 1:</strong> $address</div>";
    echo "<div class='col-12'><strong>Address Line 2</strong>: $address2</div>";
    echo "<div class='col-md-3'><strong>Country</strong>: India</div>";
    echo "<div class='col-md-3'><strong>State</strong>: West Bengal</div>";
    echo "<div class='col-md-3'><strong>City</strong>: $city</div>";
    echo "<div class='col-md-3'><strong>Zip</strong>: $zip</div>";
    $relativePath = 'received_files/' . $filename;
    echo "<div class='col-12'><strong>Uploaded File</strong>: <a href='$relativePath' target='_blank'>$filename</a></div>";
    if ($ackMail == 'option1')
      echo "<div class='col-md-12' style='color: green;'><strong>User has subscribed to the monthly newsletters</strong></div>";
    elseif ($ackMail == 'option2')
      echo "<div class='col-md-12' style='color: red'><strong>User has not subscribed to the monthly newsletters</strong></div>";
    echo "</div>";
    echo "</form>";
  }
}
?>