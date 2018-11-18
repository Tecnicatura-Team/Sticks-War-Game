<?php
class Datos{
function cargarversus(){
    session_start();
    $resultado["jugador1"]=$_SESSION["usuario"]["nombre"];
    $resultado["jugador2"]=$_SESSION["Jugador2"]["usernombre"];
    return $resultado;
    // echo json_encode($resultado);
}
}
?>