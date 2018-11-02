<?php
require_once("../Modelo/class.consultas.php");

session_start();
$nom=$_SESSION["usuario"]["nombre"];
$attrpass=$_SESSION["usuario"]["contrasena"];
// echo json_encode($_SESSION["usuario"]);
session_destroy();


$sql="update usuario set estado='desconectado' where usernombre=? and userpass=?";
$attr=array($nom, $attrpass);
$consulta=new consultas();
$consulta->query($sql,$attr);
?>