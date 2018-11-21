<?php

require_once("../Modelo/class.consultas.php");
$consulta = new Consultas();
$idper=10;
$idbd=15;
$sql="call agregarBDPersonaje(?,?)";
$consulta->query($sql,array($idper,$idbd));
?>