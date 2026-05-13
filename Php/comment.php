<?php

$conn = mysqli_connect("localhost", "root", "", "REG_Users");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['comment'])) {
    
    $username = isset($_SESSION['username']) ? $_SESSION['username'] : 'Anonymous';
    $comment  = trim($_POST['comment']);

    $stmt = mysqli_prepare($conn, "INSERT INTO comments (username, comment) VALUES (?, ?)");
    mysqli_stmt_bind_param($stmt, "ss", $username, $comment);
    mysqli_stmt_execute($stmt);

    header("Location: " . $_SERVER['PHP_SELF']); 
    exit();
}

$result = mysqli_query($conn, "SELECT * FROM comments ORDER BY created_at DESC");
?>