<?php
session_start();
session_destroy();
header("Location: ../HTML/MAIN.php");
exit();
?>