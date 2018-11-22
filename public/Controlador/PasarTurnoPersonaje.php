<?php
require_once("../Modelo/class.consultas.php");
$consultas = new Consultas();
$idper=(integer)$_POST["datos"];
$sql="call pasarturnopersonaje(?)";
$consultas->query($sql,array($idper));
?>