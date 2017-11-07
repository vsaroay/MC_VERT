<?php
	session_start();
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Login Page</title>
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
        <link rel="stylesheet" href="c_login_style.css" type="text/css">
    </head>
    <body>
        <div class="container">
            <div class="login-container">
				<div class="logo-image">
                	<img alt="Admin Logo" class="logo" src="http://www.enterprises.csus.edu/wp-content/themes/main2012/library/images/ueimainLogo@2x.png" width="50%">
                </div>
                <form class="form-login" method="POST" action="../includes/counselorLoginLogic.php">
                    <div class="form-group">
                        <input name="username" class="form-control" type="text" id="inputUsername" placeholder="Username" required="" autofocus="">
                    </div>
                    
                    <div class="form-group">
                        <input name="password" class="form-control" type="password" id="inputPassword" placeholder="Password" required="">
                    </div>

                    <div class="row">
                        <div class="col-lg-7 col-md-7 col-sm-7">
                            <button class="btn btn-md btn-primary btn-block login" type="submit" name="submit">Login</button>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3">
                            <button class="btn btn-md btn-warning password">Manage Password</button>
                        </div>
                    </div>
                    <p>
                        &copy; MC-VERT 2017
                    </p>
                </form>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    </body>
</html>