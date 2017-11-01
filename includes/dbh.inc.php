<?php

$db_server_name = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "vikdb";

// $connection = mysqli_connect("athena.ecs.csus.edu", "mcvert_user", "mcvert_db");
$connection = mysqli_connect($db_server_name, $db_username, $db_password, $db_name);
// if(!$connection){
//     exit("<p>Unable to connect</p>");
// }else exit("<p>Connected!</p>");