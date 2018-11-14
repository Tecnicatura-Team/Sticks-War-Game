<?php
require_once("../Modelo/class.consultas.php");
session_start();

//crea instancia de la clase consulta (una "copia")
$consultas= new Consultas();
$datos=$_POST["datos"];
$respuesta=array("usuario2"=>$datos["usuario2"]["usuario"], "usuario"=>$_SESSION["usuario"]["nombre"]);

$_SESSION["Jugador2"]["usuario"]=$datos["usuario2"]["usuario"]; 
$_SESSION["Jugador2"]["PosicionesJugador2"]=$datos["usuario2"]["posiciones"]; 

echo json_encode($respuesta);
?>