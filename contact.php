<?php
  // Include PHPMailer autoloader
  require 'phpmailer/src/PHPMailer.php';
  require 'phpmailer/src/SMTP.php';
  require 'phpmailer/src/Exception.php';

  // Create a new PHPMailer instance
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  // Initialize PHPMailer
  $mail = new PHPMailer(true);

try {
      //Server settings
      $mail->SMTPDebug = 0;                      // Enable verbose debug output
      $mail->isSMTP();                                            // Send using SMTP
      $mail->Host       = 'dev.projoss.com';                    // Set the SMTP server to send through
      $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
      $mail->Username   = 'info@projoss.com';                     // SMTP username
      $mail->Password   = 'J13245768Kinfo';                         // SMTP password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
      $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

      //Recipients
      $mail->setFrom('info@projoss.com', 'From My Website');
      $mail->addAddress('jkblog24@gmail.com','JK coders');     // Add a recipient

      // Get form data
      $name = $_POST['name'];
      $email = $_POST['email'];
      $message = $_POST['message'];

      // Content
      $mail->isHTML(true);                                  // Set email format to HTML
      $mail->Subject = 'User Data';
      $mail->Body    = 'Name: ' . $name . '<br>Email: ' . $email . '<br>Subject: ' . $subject . '<br>Message: ' . $message;

      $mail->send();
      // Redirect to thanks.html after successful email send
      header("Location: index.html");
      exit;
    } 
    catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
?>






    <!-- // Collect form data
    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $message = $_POST['message'];
    // $to = "mdj524156@gmail.com";
    // $subject = "New Contact Form Submission";
    // $txt = "Name: " . $name . "\r\n Email: " . $email . "\r\n message: " . $message;
    // $headers = "From: info@jkcoders.xyz" . "\r\n";
    // if($email!=NULL){
    //   mail($to,$subject,$txt,$headers);
    // }
    // header("location:thanks.html"); --> 


