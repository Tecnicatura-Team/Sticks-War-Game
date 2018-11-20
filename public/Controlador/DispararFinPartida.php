<?php
require_once("../Modelo/class.consultas.php");
$consulta = new Consultas();
session_start();
// {ID:1}
$userid=(integer)$_POST["ID"];
$sql="select * from personaje where personajepertenece=? AND vidaactual>0";
$consulta->query($sql,array($userid));
$resultado=array();
$resultado["usuario"]=$_SESSION["usuario"]["nombre"];
if($consulta->getColumnAffected()>0){
    $resultado["respuesta"]=false;
    echo json_encode($resultado,JSON_UNESCAPED_UNICODE);
}else{
    $resultado["respuesta"]=true;
    echo json_encode($resultado,JSON_UNESCAPED_UNICODE);
}
?>