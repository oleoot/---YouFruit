<?php
$name = $_POST['name'];
$email = $_POST['e-mail'];
$subject = $_POST['subject'];
$text = $_POST['text'];
$token = "1053137631:AAEO4h0Pg3U1riyrfL9Y9I1blac1nUMJC1s";
$chat_id = "-336224716";
$arr = array(
  'Имя пользователя: ' => $name,
  'Email:' => $email,
  'Тема: ' => $subject,
  'Текст сообщения: ' => $text,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>