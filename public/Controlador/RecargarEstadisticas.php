<?php
INCLUDE_ONCE "PartidaJS.php";
session_start();
$partida=$_POST["datos"];
$recargar=new PartidaJS();
$partida=$recargar->recargarEstaististicasPJ($partida);
$_SESSION["Partida"]=$partida;
echo json_encode($partida,JSON_UNESCAPED_UNICODE);

?>