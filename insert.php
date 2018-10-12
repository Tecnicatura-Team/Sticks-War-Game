<?php
//conectar con base de datos
require("ConectarDB.php");

//busca si ya existe la cuenta en la bd
$sql = "select * from usuario where nombre='" . $_REQUEST['RNombre'] . "';";

/*ejecuta la consulta*/
$registros = mysqli_query($conexion, $sql) or die("Problemas en
la selección de la base de datos" . mysqli_error($conexion));

if (mysqli_fetch_row($registros) != 0) {
  echo "<script>alert('El nombre de usuario ya existe, intente con otro!.');</script>";
} else {
  /*Consulta*/
  $sql = "insert into usuario values(0,'" . $_REQUEST['RNombre'] . "','" . $_REQUEST['RContraseña'] . "',0,0);";

  /*ejecuta la consulta*/
  $registros = mysqli_query($conexion, $sql) or die("Problemas en el
  select: " . mysqli_error($conexion));

  echo "<script>alert('Usuario registrado con éxito, volviendo a la página principal.');</script>";
   //redirige a la pagina principal
  echo "<script>location.href='index.html';</script>";
}
?>
