<?php
$file = "feedback.txt";
if (file_exists($file)) {
  $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
  $lines = array_reverse($lines); // Show newest first

  foreach ($lines as $line) {
    list($project, $reviewer, $rating, $comment) = explode("|", $line);
    echo "<div class='feedback-card'>
            <b>$project</b> — Rated <b>$rating/5</b><br>
            \"$comment\"<br>
            <small>by <i>$reviewer</i></small>
          </div>";
  }
} else {
  echo "<i>No feedback yet. Be the first!</i>";
}
?>
