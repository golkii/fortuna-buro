<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  $mail->setFrom('antgolik@gmail.com', 'Заказ');
  $mail->addAddress('antgolik@gmail.com');
  $mail->Subject = 'Заказ';

  $body = '<h1>Новый заказ</h1>';

  if(trim(!empty($_POST['serviceType']))){
    $body.='<p>Услуга: '.$_POST['serviceType'].'</p>';
  }
  if(trim(!empty($_POST['fullName']))){
    $body.='<p>ФИО: '.$_POST['fullName'].'</p>';
  }
  if(trim(!empty($_POST['phoneNumber']))){
    $body.='<p>Телефон: '.$_POST['phoneNumber'].'</p>';
  }
  if(trim(!empty($_POST['email']))){
    $body.='<p>Email: '.$_POST['email'].'</p>';
  }
  if(trim(!empty($_POST['comment']))){
    $body.='<p>Комментарий: '.$_POST['comment'].'</p>';
  }

  $mail->Body = $body;

  if (!$mail->send()) {
    $message = 'Ошибка';
  }
  else {
    $message = 'Данные отправлены!';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);

?>