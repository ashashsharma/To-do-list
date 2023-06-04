<?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $task = $_POST['task'];

    // Save the task to a database or file

    echo json_encode(['status' => 'success']);
    exit;
  }
?>
