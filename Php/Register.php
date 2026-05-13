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
$conn = mysqli_connect("localhost", "root", "", "REG_Users");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$name = $_POST['name'];
$password = $_POST['password'];
$fav_re = $_POST['fav-resident'];
$regn = $_POST['region'];

$check = mysqli_query($conn, "SELECT * FROM users WHERE name='$name'");
if (mysqli_num_rows($check) > 0) {
    die("Username already taken.");
}
$query = mysqli_query($conn, "INSERT INTO users (name, password, fav_resident, region) VALUES ('$name', '$password', '$fav_re', '$regn')");

if ($query) {
    header("Location: http://localhost/projective/AUTEN/login.html");
} else {
    die("Registration failed: " . mysqli_error($conn));
}
?>
</body>
</html>