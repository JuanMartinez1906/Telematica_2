<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "course_manager";

$conn = new mysqli ($servername, $username, $password, $dbname);

if ($conn -> connect_error) {
    die("Connection failed: " . $conn -> connect_error);
}

function obtenerDatos() {
    global $conn;
    $sql = "SELECT * FROM tabla";
    $result = $conn->query($sql);
    $data = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
    return $data;
}
?>