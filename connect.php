<?php
$email = filter_input(INPUT_POST, 'email');
$password = filter_input(INPUT_POST, 'password');
if (!empty($email)){
if (!empty($password)){
$servername = "localhost";
$dbusername = "strt";
$dbpassword = "ence";
$dbname = "srsDB";

$conn = new mysqli ($servername, $dbusername, $dbpassword, $dbname);
if (mysqli_connect_error()){
die('Connect Error ('. mysqli_connect_errno() .') '
. mysqli_connect_error());
}
else{
$sql = "INSERT INTO users (email, password)
values ('$email','$password')";
if ($conn->query($sql)){
echo "Welcome! Your registration was succesful!";
}
else{
echo "Error: ". $sql ."
". $conn->error;
}
$conn->close();
}
}
else{
echo "You must set a password!";
die();
}
}
else{
echo "You must give an email address!";
die();
}
?>