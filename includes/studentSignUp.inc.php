<?php
    include_once 'dbh.inc.php';

    $first = mysqli_real_escape_string($connection, $_POST['first']);
    $last = mysqli_real_escape_string($connection, $_POST['last']);
    $email = mysqli_real_escape_string($connection, $_POST['email']);
    $uid = mysqli_real_escape_string($connection, $_POST['uid']);
    $pass = mysqli_real_escape_string($connection, $_POST['pass']);

    $sql = "INSERT INTO student (firstName, lastName, major, uid, pass)
            VALUES ('$first', '$last', '$email', '$uid', '$pass');";
    mysqli_query($connection, $sql); 

    header("location: ../studentReg/index.php?signup=success");