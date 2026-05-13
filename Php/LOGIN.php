<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width= , initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <title>Login</title>
</head>
<style>
</style>
<body>
<?php
session_start();

$conn = mysqli_connect("localhost", "root", "", "REG_Users");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE name=? AND password=?");
mysqli_stmt_bind_param($stmt, "ss", $_POST['name'], $_POST['password']);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

if (mysqli_num_rows($result) > 0) {
    $user = mysqli_fetch_assoc($result);
    
    $_SESSION['logged_in'] = true; 
    $_SESSION['username'] = $user['name'];  
    $_SESSION['user_id'] = $user['id'];    
    
    header("Location: ../HTML/MAIN.php");
    exit(); 
} else {
    echo "Wrong username or password.";
}
?>
</body>
</html>