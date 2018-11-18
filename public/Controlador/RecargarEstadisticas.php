<?php
INCLUDE_ONCE "PartidaJS.php";

$partida=$_POST["datos"];
$recargar=new PartidaJS();
$partida=$recargar->recargarEstaististicasPJ($partida);

echo json_encode($partida,JSON_UNESCAPED_UNICODE);

?>