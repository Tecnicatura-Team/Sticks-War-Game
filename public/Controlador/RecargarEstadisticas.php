<?php
INCLUDE_ONCE "PartidaJS.php";

$partida=$_POST["datos"];

$partida=recargarEstaististicasPJ($partida);

echo json_encode($partida,JSON_UNESCAPED_UNICODE);

?>