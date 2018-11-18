<?php
require_once("../Modelo/class.consultas.php");
$consultas=new Consultas();
// $userid=$_POST["datos"];
// $sql="delete from personaje where personajepertenece=?";
$sql="delete from personaje where personajeid>0";
// $consultas->query($sql,array($userid));
$consultas->query($sql,array());
?>