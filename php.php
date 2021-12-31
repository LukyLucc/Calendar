<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "buchungstage";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM tage";
$result = $conn->query($sql);
$array = array();
   
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $myObj = new stdClass(); 
    
    $start = new DateTime($row["von"]);
    $end = new DateTime($row["bis"]);
    $end->setTime(0,0,0);
    $start->setTime(0,0,0);
    while($start <= $end){
        $array[] = $start->format("Y-m-d");
        $start->add(new DateInterval('P1D'));
    }
  }
} else {
  echo "0 results";
}

$conn->close();
$myJSON = json_encode($array);
echo($myJSON);
?>