<?php

session_start();
$_SESSION["PosicionesJugador1"]=$_POST["Jugador1"];

echo json_encode($_POST["Jugador1"]);

?>