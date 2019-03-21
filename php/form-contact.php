<?php
/*session_start();
if( ! ini_get('date.timezone') )
{
    date_default_timezone_set('GMT');
}*/
//require_once("../config/config.php");
//require_once("../class/cmclass.php");

if(isset($_POST['email'])){
	
	$fname		=	isset($_POST['firstName'])?($_POST['firstName']):'';
	$lname		=	isset($_POST['lastName'])?($_POST['lastName']):'';
	$name		=	$fname	.	$lname;
	$phone		=	isset($_POST['phone'])?($_POST['phone']):'';
	
	$emailId	=	isset($_POST['email'])?($_POST['email']):''; 
	$message1	=	isset($_POST['message'])?($_POST['message']):'';
	
		$subject	=	"Adtalkies - Contact Mail";
	
	$message	=	"<html>
<head>
<title>Email</title>
</head>
<body>
<h3>Adtalkies - Contact Mail</h3>
<b>Name : </b> {$name} <br />
<b>Email Id : </b> {$emailId} <br />
<b>Phone : </b> {$phone} <br />
<b>Message : </b> <br />{$message1}
</body>
</html>";
	
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	
	$headers .= "From: AdTalkies<noreply@adtalkies.in>\r\n";
	
	if(!empty($name) && !empty($emailId) && !empty($message1) )
	{
		mail('adtalkies@gmail.com',$subject,$message,$headers);
		echo 'success';
		
	}
	else
	{
		echo 'failed';
	}	
}
else
{
	echo 'failed';
}
?>