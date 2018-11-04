<?php
require_once("../Modelo/class.consultas.php");
session_start();
$consulta=new Consultas();

$sql="select * from habilidad";
$consulta->query($sql,array());
$resultado=array();

$resultado=array("usuario" => $_SESSION["usuario"]["nombre"],"habilidad"=>$consulta->getResult());

 echo json_encode($resultado);

// echo json_encode($consulta->getColumnAffected())



?>