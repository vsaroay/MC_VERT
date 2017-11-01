<!DOCTYPE html>
<html lang="en">
<head>
    <title>MC-VERT</title>
</head>
<body>
    <?php
        include_once '../includes/dbh.inc.php';

        $sql = "SELECT * FROM users;";
        $result = mysqli_query($connection, $sql);
        $resultCheck = mysqli_num_rows($result);

        if($resultCheck > 0){
            while($row = mysqli_fetch_assoc($result)){
                echo $row['uid'];
            }
        }
    ?>
</body>
</html>