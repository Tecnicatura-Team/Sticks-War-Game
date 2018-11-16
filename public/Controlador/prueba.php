<?php
session_start();
require_once("FuncionesPartida.php");
$prueba=new Funciones();
$prueba->cargarPartida(1);
?>