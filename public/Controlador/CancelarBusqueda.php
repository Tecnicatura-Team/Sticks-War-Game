<?php
require_once("../Modelo/class.consultas.php");
session_start();

//crea instancia de la clase consulta (una "copia")
$consultas= new Consultas();


if($_SESSION["usuario"]["estado"] != "conectado"){

    $sql="update usuario set estado='conectado' where usernombre = ?";
    $attr=array($_SESSION["usuario"]["nombre"]);
    $consultas->query($sql, $attr);

    $_SESSION["usuario"]["estado"]="conectado";

}

?>