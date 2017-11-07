<?php
	session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Counselor Portal</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link rel="stylesheet" href="portal_style.css">
</head>
<body>

	<h2>Counselor Portal</h2>
	<form action="../includes/counselorLogoutLogic.php" method="POST">
		<button type="submit" name="submit">Logout</button>
	</form>
	<?php
		if(isset($_SESSION['u_id'])){
			echo "You are logged in ".$_SESSION['u_username'];
		}
	?>
    
</body>
</html>