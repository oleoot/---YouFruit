<?php
$phone = $_POST['phone'];
$token = "1053137631:AAEO4h0Pg3U1riyrfL9Y9I1blac1nUMJC1s";
$chat_id = "-1001422883871";
$arr = array(
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: call-phone/call-phone.html');
} else {
  echo "Error";
}
?>
