<?php
//conectar con base de datos
require("ConectarDB.php");

//consulta
$sql = "select * from usuario where nombre='" . $_REQUEST['Nombre'] . "'
and contrasena='" . $_REQUEST['Contraseña'] . "';";

/*ejecuta la consulta*/
$registros = mysqli_query($conexion, $sql) or die("Problemas en
la selección de la base de datos" . mysqli_error($conexion));

if (mysqli_fetch_row($registros) != 0) {
  echo "<script>alert('Login satisfactorio');</script>";
  //redirige a la pantalla principal del juego
  echo "<script>location.href='juego.php';</script>";
} else {
  echo "<script>alert('No se pudo iniciar sesión, verifique los datos ingresados');</script>";
   //redirige a la pagina principal
  echo "<script>location.href='SticksWar.php';</script>";
}
?>
