<?php

session_start();

if (isset($_POST['submit'])){
	
	include_once '../includes/dbh.inc.php';
	
	$username = mysqli_real_escape_string($connection, $_POST['username']);
	$password = mysqli_real_escape_string($connection, $_POST['password']);
	
	// Error Handling
	if(empty($username) || empty($password)){
		header("Location: ../counselorLogin/loginCounselor.php?login=empty");
		exit();
	} else {
		$sql = "SELECT * FROM counselor WHERE username='$username' OR E_mail='$username'";
		$result = mysqli_query($connection, $sql);
		$resultCheck = mysqli_num_rows($result);
		if($resultCheck < 1){
			header("Location: ../counselorLogin/loginCounselor.php?login=no_data_in_db");
			exit();
		} else {
			if($row = mysqli_fetch_assoc($result)){
				//$passwordCheck = password_verify($password, $row['password']);
				if($password != $row['password']){
					header("Location: ../counselorLogin/loginCounselor.php?login=incorrect_password");
					exit();
				} elseif($password == $row['password']){
					//login the user here
					$_SESSION['u_id'] = $row['id'];
					$_SESSION['u_first'] = $row['First'];
					$_SESSION['u_last'] = $row['Last'];
					$_SESSION['u_advising'] = $row['Advising'];
					$_SESSION['u_email'] = $row['E_mail'];
					$_SESSION['u_username'] = $row['username'];
					$_SESSION['u_password'] = $row['password'];
					header("Location: ../counselorPortal/portal.php?login=success");
					exit();
				} 
			}
		}
	}	
} else {
	header("Location: ../counselorLogin/loginCounselor.php?login=something_went_wrong");
	exit();
}

?>