<?php
require_once("../Modelo/class.consultas.php");
$consultas= new Consultas();
$datos=$_POST["datos"];
$sql="update partida set ganadorid=? where partidaid=?";
$consultas->query($sql,array($datos["ganador"],$datos["partida"]));
?>