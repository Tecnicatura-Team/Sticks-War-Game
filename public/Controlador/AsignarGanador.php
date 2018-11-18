<?php
require_once("../Modelo/class.consultas.php");
session_start();
$consultas= new Consultas();
$datos=$_POST["datos"];
$sql="update partida set ganadorid=? where partidaid=?";
$consultas->query($sql,array($datos["ganador"],$datos["partida"]));
echo json_encode($_SESSION["Partida"]["Contrincante"]["Nombre"], JSON_UNESCAPED_UNICODE);

?>