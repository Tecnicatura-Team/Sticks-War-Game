<?php
require_once("../Modelo/class.consultas.php");
$consulta = new Consultas();
$idper=$_POST["personaje"];
$idbd=$_POST["buff"];
$sql="call agregarBDPersonaje(?,?)";
$consulta->query($sql,array($idper,$idbd));
?>