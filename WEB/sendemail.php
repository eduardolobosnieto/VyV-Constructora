<?php
require("PHPMailer-master/PHPMailerAutoload.php");

$mail = new PHPMailer;

$to = "eduardolobosnieto@gmail.com";

$nombre = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = nl2br($_POST['message']);

if ($nombre == "" || $email == "" || $subject == "" || $message == "") :
	echo '<div class="alert alert-danger">Todos los campos son requeridos para el envio</div>';
else:
	$mail->From = $email;
	$mail->addAddress($to);
	$mail->Subject = "Correo Enviado por el Sitio WEB";
	$mail->isHtml(true);
	$mail->Body = '<strong>Nombre : </strong> '.$nombre.'<br>
				   <strong>E-Mail : </strong> '.$email.'<br>
				   <strong>Asunto : </strong> '.$subject.'<br>
				   <strong>Mensaje: </strong><p>'. $message.'</p>';
	$mail->CharSet = 'UTF-8';
	$mail->send();
	echo '<div class="alert alert-success">Muchas gracias '.$nombre.' Mensaje Enviado con excito !&nbsp;&nbsp;&nbsp;<i class="fa fa-check-square-o fa-2x" aria-hidden="true"></i>
</div>';
endif;
?>