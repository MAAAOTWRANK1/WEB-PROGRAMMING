<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $projectName = $_POST['projectName'];
  $reviewer = $_POST['reviewer'];
  $rating = $_POST['rating'];
  $comments = $_POST['comments'];

  $data = "$projectName|$reviewer|$rating|$comments\n";
  file_put_contents("feedback.txt", $data, FILE_APPEND);

  echo "Thanks $reviewer! Your feedback for '$projectName' has been saved 💙";
} else {
  echo "Invalid request";
}
?>
