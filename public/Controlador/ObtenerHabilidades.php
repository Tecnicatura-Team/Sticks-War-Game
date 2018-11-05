<?php
require_once("../Modelo/class.consultas.php");
session_start();
$consulta=new Consultas();

$sql="select * from habilidad";
$consulta->query($sql,array());
$resultado=array();

$resultado=array("usuario" => $_SESSION["usuario"]["nombre"],"habilidad"=>$consulta->getResult());

$habilidad=array();


for($i=0;$i<count($resultado); $i++){
$habilidad[$i]["habilidadid"]=utf8_decode($resultado["habilidad"][$i]["habilidadid"])
$habilidad[$i]["habilidadclase"]=utf8_decode($resultado["habilidad"][$i]["habilidadclase"])
$habilidad[$i]["habilidadnombre"]=utf8_decode($resultado["habilidad"][$i]["habilidadnombre"])
$habilidad[$i]["direcicono"]=utf8_decode($resultado["habilidad"][$i]["direcicono"])
$habilidad[$i]["direcimagen"]=utf8_decode($resultado["habilidad"][$i]["direcimagen"])
$habilidad[$i]["descripcion"]=utf8_decode($resultado["habilidad"][$i]["descripcion"])


//    $resultado["habilidad"][$i]["descripcion"]=utf8_encode($resultado["habilidad"][$i]["descripcion"]);
//    $resultado["habilidad"][$i]["habilidadnombre"]=utf8_encode($resultado["habilidad"][$i]["habilidadnombre"]);
}

 echo json_encode($habilidad);

// echo json_encode($consulta->getColumnAffected())



?>