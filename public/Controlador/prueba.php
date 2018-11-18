<?php
// require_once("FuncionesPartida.php");
require_once("PartidaJS.php");


session_start();
// $prueba=new Funciones();
// $prueba->cargarversus();
$prueba=new PartidaJS();

print_r($prueba->recargarEstaististicasPJ($_SESSION["Partida"]));

// print_r($_SESSION["Partida"]);
?>