<?php
require_once("../Modelo/class.consultas.php");
$consultas=new Consultas();
$userid=$_POST["datos"];
$sql="delete from personajesufrebd where personajeid in (select personajeid from personaje where personajepertenece=?)";
$consultas->query($sql,array($userid));

$sql="delete from personaje where personajepertenece=?";
$consultas->query($sql,array($userid));
?>