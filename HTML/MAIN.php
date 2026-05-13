
<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page REG</title>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../CSS/MAIN.css">
    <script src="../JavaScript/MAIN.js"></script> 
</head>
<body>
    <nav id="navig">
        <h3 id="logo">REG</h3>
        <div id="search"> 
            <input type="text" id="sbar" placeholder= "What resident evil are you looking for?">
            <input type="submit" name="" value="search" id="search-btn">
        </div>
    <?php if (isset($_SESSION['username'])): ?>
        <p><?= htmlspecialchars($_SESSION['username']) ?></p>
        <a href="../Php/LOGOUT.php" class="user ">Logout</a>
    <?php else: ?>
        <a href="http://localhost/projective/AUTEN/Register.html" class="user">Get in</a>
    <?php endif; ?>
   
    </nav>

    <div id="mainpart">
        <div id="heartmain">
            <div id="banner">
            <h1><span class="red">R</span>esident <span class="red">E</span>vil <span class="red">G</span>uides</h1>
            </div>
            <div id="choice">
                <p></p>
            </div>
            <div id="buttons">
                <button class="parts" id="wayone">
                    <!-- <img src="../Images/brcade-tape.png" alt="" class="baricade"> -->
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Resident_Evil_logo.svg" alt="" class="txtlog">
                    <img src="../Images/Zombie1.png" alt="" class="photo">
                </button>
                <button class="parts" id="waytwo">
                    <!-- <img src="../Images/brcade-tape.png" alt="" class="baricade"> -->
                    <img class="txtlog" src="https://logos-world.net/wp-content/uploads/2021/02/Resident-Evil-2-Logo-1998.png" alt="">
                    <img class="photo" src="https://preview.redd.it/favorite-resident-evil-cover-art-personally-i-think-og-re2-v0-jgvxs7sorp8e1.jpg?width=640&crop=smart&auto=webp&s=e687ab147a1e3f148d11a6c91fb2e5a020d46b12" alt="">
                </button>
                <button class="parts" id="waythree">
                    <!-- <img src="../Images/brcade-tape.png" alt="" class="baricade"> -->
                    <img class="txtlog" src="https://www.teamhitless.com/wp-content/uploads/2024/07/re3logo.png" alt="">
                    <img src="../Images/Nemesis.png" alt="" class="photo">
                </button>
                <button class="parts" id="waytwoRE">
                    <img class="txtlog" src="../Images/RE2-LOGO.png" alt="">
                    <img src="../Images/Zombie2.png" alt="" class="photo">
                </button>
            </div>
           
        </div>
        
    </div>
    <p style="text-align: center;">If you saw our mistakes, please come to our <a href="OPINIONS.php">Opinions Chat</a> There you can share your opinion and tell, <br>
    me about the bag or mistake I made while writting a code. Cant wait to see you there :) </p>
    <div id="partners">
        <h1 style="text-align: center;">Not so Partners</h1>
        <canvas id="canva" width="1000" height="700"></canvas>
        <script defer type="module">
            import {lidl} from "../JavaScript/canvas.js"
            lidl(665, 100)
        </script>
    </div>

</body>
</html>