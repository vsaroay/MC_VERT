<?php

session_start();

if (isset($_POST['submit'])){
    include_once '../includes/dbh.inc.php';

    $sql = "SELECT * FROM student WHERE firstName='$firstName' OR email='$firstName' OR id = '$firstName'";
    $result = mysqli_query($connection, $sql);
    $resultCheck = mysql_num_rows($result);
}

?>