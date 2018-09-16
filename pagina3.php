<?php
/*Crear la conexion*/
$conexion=mysqli_connect("localhost","root","") or
die("Problemas en la conexion");

/*Selecciona la BD*/
mysqli_select_db($conexion,"SticksWarTest") or die("Problemas en
la selección de la base de datos");

/*Consulta*/
$sql="select * from usuario;";

/*ejecuta la consulta*/
$registros=mysqli_query($conexion, $sql) or die("Problemas en el
select:".mysql_error());

while ($reg=mysqli_fetch_array($registros, MYSQL_ASSOC)){

  /*  echo $reg['id']." ".$reg['nombre'];*/
foreach($reg as $var){
echo $var;
echo "<br>";
}
echo "<br>";
echo "____________";
echo "<br>";
}
 ?>
