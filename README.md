Greetings user of my badly godly made program!
Few of things here must be explained before you come and start knocking on my door with angry look on your face.
First of all, heres the code for my sql data base:
create database reg_user;
use reg_user;
CREATE TABLE users(
    id int AUTO_INCREMENT PRIMARY KEY,
    username VARHCAR(100),
    password VARHCAR(100),
    fav_resident VARHCAR(50),
    region varchar(30)
);
CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



And second of all, from all maps and guides, for now, only resident evil 2 remake works others are in progress, so If you want to check out the work of the map, please click on the resident evil 2 reamke button, its the last one of all, in the main.php.
