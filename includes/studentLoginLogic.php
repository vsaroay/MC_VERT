<?php

session_start();

if (isset($_POST['submit'])){
	
	include_once '../includes/dbh.inc.php';
	
	$username = mysqli_real_escape_string($connection, $_POST['username']);
	$password = mysqli_real_escape_string($connection, $_POST['password']);
	
	// Error Handling
	if(empty($username) || empty($password)){
		header("Location: ../studentLogin/loginStudent.php?login=empty");
		exit();
	} else {
		$sql = "SELECT * FROM student WHERE username='$username' OR email='$username'";
		$result = mysqli_query($connection, $sql);
		$resultCheck = mysqli_num_rows($result);
		if($resultCheck < 1){
			header("Location: ../studentLogin/loginStudent.php?login=no_data_in_db");
			exit();
		} else {
			if($row = mysqli_fetch_assoc($result)){
				//$passwordCheck = password_verify($password, $row['password']);
				if($password != $row['password']){
					header("Location: ../studentLogin/loginStudent.php?login=incorrect_password");
					exit();
				} elseif($password == $row['password']){
					//login the user here
					$_SESSION['u_id'] = $row['id'];
					$_SESSION['u_first'] = $row['firstName'];
					$_SESSION['u_last'] = $row['lastName'];
					$_SESSION['u_major'] = $row['major'];
					$_SESSION['u_status'] = $row['status'];
					$_SESSION['u_email'] = $row['email'];
					$_SESSION['u_username'] = $row['username'];
					$_SESSION['u_password'] = $row['password'];
					header("Location: ../studentPortal/portal.php?login=success");
					exit();
				} 
			}
		}
	}	
} else {
	header("Location: ../studentLogin/loginStudent.php?login=something_went_wrong");
	exit();
}

?>