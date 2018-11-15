<?php
require_once("../Modelo/class.consultas.php");
session_start();

//crea instancia de la clase consulta (una "copia")
$consultas= new Consultas();
$datos=$_POST["datos"];
print_r($datos);
// $respuesta=array("usuario2"=>$datos["usuario2"], "usuario"=>$_SESSION["usuario"]["nombre"]);

$_SESSION["Jugador2"]=$datos["usuario2"]; 


$sql="select * from usuario where usernombre="+$datos["usuario2"];
$consultas->query($sql,array());


$user2=$consultas->getResult();
$_SESSION["Jugador2"]=$user2[0]; 

// $_SESSION["Jugador2"]["PosicionesJugador2"]=$datos["usuario2"]["posiciones"]; 
// echo json_encode($datos["usuario2"]);
//  echo json_encode($respuesta);
?>