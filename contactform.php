<?php
if (isset($_POST["submit"])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = 'p14y3r70@o2.pl';
    $headers = 'From: '.$mailFrom;
    $txt = 'Email from: '.$name.'.\n\n'.$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}