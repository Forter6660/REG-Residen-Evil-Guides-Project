<?php
session_start();

$conn = mysqli_connect("localhost", "root", "", "REG_Users");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['comment'])) {
    $username = isset($_SESSION['username']) ? $_SESSION['username'] : 'Anonymous';
    $comment = trim($_POST['comment']);

    $stmt = mysqli_prepare($conn, "INSERT INTO comments (username, comment) VALUES (?, ?)");
    mysqli_stmt_bind_param($stmt, "ss", $username, $comment);
    mysqli_stmt_execute($stmt);

    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

$result = mysqli_query($conn, "SELECT * FROM comments ORDER BY created_at DESC");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/OPINIONS.css">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <title>Opinions Chat</title>
</head>
<body>
    <nav id="navig">
        <a href="MAIN.php" id="return"><h3 id="logo">REG</h3></a>
            <?php if (isset($_SESSION['username'])): ?>
        <p><?= htmlspecialchars($_SESSION['username']) ?></p>
            <a href="../Php/LOGOUT.php" class="user ">Logout</a>
        <?php else: ?>
            <a href="http://localhost/projective/AUTEN/Register.html" class="user">Get in</a>
        <?php endif; ?>
    </nav>
    <?php if (isset($_SESSION['username'])): ?>
        <div class="comments-list">
            <?php while ($row = mysqli_fetch_assoc($result)): ?>
                <div class="comment">
                    <h1><?= htmlspecialchars($row['username']) ?></h1>
                    <h3><?= $row['created_at'] ?></h3>
                    <p><?= htmlspecialchars($row['comment']) ?></p>
                </div>
            <form method="POST">
                <div id="writer">
                    <textarea name="comment" placeholder="Write a comment..." required></textarea>
                    <button type="submit">Post Comment</button>
                </div>

            </form>
            <?php endwhile; ?>
        </div>
    <?php else: ?>
        <div id="N-Log">
            <h1>Please Log In to see or write a comment</h1>
        </div>

    <?php endif; ?>
</body>
</html>