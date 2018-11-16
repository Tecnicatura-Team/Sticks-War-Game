<?php
session_start();
require_once("FuncionesPartida.php");
$prueba=new Funciones();
$prueba->cargarversus();
$prueba->cargarPartida(1);
?>