<?php
require_once("../Modelo/class.consultas.php");
require_once("FuncionesPartida.php");
session_start();

//crea instancia de la clase consulta (una "copia")
$consultas= new Consultas();
$datos=$_POST["datos"];
// print_r($datos);
// $respuesta=array("usuario2"=>$datos["usuario2"], "usuario"=>$_SESSION["usuario"]["nombre"]);

$_SESSION["Jugador2"]=$datos["usuario2"]; 


$sql="select * from usuario where usernombre='".$datos["usuario2"]."'";
$consultas->query($sql,array());


$user2=$consultas->getResult();
// print_r($user2[0]);

$_SESSION["Jugador2"]=$user2[0]; 
$_SESSION["jugadorNumero"]=2;

// echo $_SESSION["jugadorNumero"];
// echo $user2[0];
//  $_SESSION["Jugador2"]["PosicionesJugador2"]=$datos["usuario2"]["posiciones"]; 
// echo json_encode($datos["usuario2"]);
//  echo json_encode($respuesta);

$sql="insert into personaje (personajeclase,objetoid,personajeposicion,personajepertenece,vidaactual) 
values
((select claseid from clase where clasenombre='".$datos["posiciones"]["posicionPJ1"]."'),".$datos["posiciones"]["objeto1"].",
1,".$_SESSION["usuario"]["id"].",(select vidamaxima from clase where clasenombre='".$datos["posiciones"]["posicionPJ1"]."')),

((select claseid from clase where clasenombre='".$datos["posiciones"]["posicionPJ2"]."'),".$datos["posiciones"]["objeto2"].",
2,".$_SESSION["usuario"]["id"].",(select vidamaxima from clase where clasenombre='".$datos["posiciones"]["posicionPJ2"]."')),

((select claseid from clase where clasenombre='".$datos["posiciones"]["posicionPJ3"]."'),".$datos["posiciones"]["objeto3"].",
3,".$_SESSION["usuario"]["id"].",(select vidamaxima from clase where clasenombre='".$datos["posiciones"]["posicionPJ3"]."'))";

//  print_r($datos);
 
// $consultas->query($sql, array());

// echo $_POST["usuario2"]

$funciones=new Funciones();
$_SESSION["Partida"]=$funciones->cargarPartida($_SESSION["usuario"]["id"]);

?>