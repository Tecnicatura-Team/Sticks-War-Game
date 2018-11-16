<?php

session_start();

INCLUDE_ONCE "../Modelo/class.consultas.php";
INCLUDE_ONCE "../Modelo/Usuario.php";
INCLUDE_ONCE "../Modelo/Partida.php";






$consultas= new Consultas();
$resultado=array();

// $sql="select partidaid from partida (jugador1id=? or jugador2id=? ) and ganadorid is null";
$sql="select partidaid from partida jugador".$_SESSION["jugadorNumero"]."id=? and ganadorid is null";

$consultas->query($sql,array($_SESSION["usuario"]["id"]));
$resultado=$consulta->getResult();

$jugador= new Jugador($_SESSION["usuario"]["id"], $_SESSION["usuario"]["nombre"], $_SESSION["usuario"]["nivel"],$_SESSION["usuario"]["userexp"], );

$usuario1= new Usuario($_SESSION["usuario"]["id"], $_SESSION["usuario"]["nombre"], $_SESSION["usuario"]["nivel"]);

$usuario2= new Usuario($_SESSION["Jugador2"]["userid"], $_SESSION["Jugador2"]["usernombre"], $_SESSION["Jugador2"]["usernivel"]);

$partida= new Partida($resultado[0], $usuario1, $usuario2);




$resultado["jugador1"]=$_SESSION["usuario"]["nombre"];
$resultado["jugador2"]=$_SESSION["Jugador2"]["usernombre"];



echo json_encode($resultado);

?>