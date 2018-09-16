<?php
/*Crear la conexion*/
$conexion=mysqli_connect("localhost","root","") or
die("Problemas en la conexion");

/*Selecciona la BD*/
mysqli_select_db($conexion,"SticksWarDB") or die("Problemas en
la selección de la base de datos".mysqli_error($conexion));
?>
