<?php
$data = json_decode(file_get_contents('php://input'), true);

$number1 = $data['number1'];
$number2 = $data['number2'];
$result = $number1 + $number2;

$response = array(
  "result" => $result
);

header('Content-Type: application/json');
echo json_encode($response);
?>
