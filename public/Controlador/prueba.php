<?php

require_once("FuncionesPartida.php");
$prueba=new Funciones();
$prueba->cargarversus();

print_r($prueba->cargarPartida(1));
?>