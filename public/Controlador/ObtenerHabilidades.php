<?php
require_once("../Modelo/class.consultas.php");
require_once("./array.php");
$toutf8array= new classarray();
session_start();
$consulta=new Consultas();

$sql="select * from habilidad";
$consulta->query($sql,array());
$resultado=array();
$resultado["usuario"]=$_SESSION["usuario"]["nombre"];
$resultado["habilidad"]=$toutf8array->utf8Arraydoble($consulta->getResult());
// $resultado=array("usuario" => $_SESSION["usuario"]["nombre"],"habilidad"=>$consulta->getResult());

// $habilidad=array();



 echo json_encode($resultado,JSON_UNESCAPED_UNICODE);

// echo json_encode($consulta->getColumnAffected())



?>