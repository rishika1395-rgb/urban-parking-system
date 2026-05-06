<?php
include 'db.php';

$id = $_POST['id'];

$conn->query("UPDATE parking 
SET available_slots = available_slots - 1 
WHERE id = $id AND available_slots > 0");

echo "Booked";
?>
