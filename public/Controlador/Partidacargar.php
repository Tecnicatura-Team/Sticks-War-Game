<?php
require_once("PartidaJS.php");
$partida=new PartidaJS();
session_start();
$_SESSION["Partida"]=$partida->cargarPartida($_SESSION["usuario"]["id"]);
echo json_encode($_SESSION["Partida"],JSON_UNESCAPED_UNICODE);
?>