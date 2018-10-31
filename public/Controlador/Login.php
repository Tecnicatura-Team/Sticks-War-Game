<?php
    require_once("../Modelo/class.consultas.php");
    session_start();
    $consulta = new Consultas();
    // echo json_encode("d")
    // echo json_encode($_POST["nombre"]);
    // echo json_encode($_POST["contraseña"]);
    // echo $_POST["nombre"];
    // echo $_POST["contraseña"];
    // echo json_encode("hola");
    $sql="select userid,usernombre,userpass,estado from usuario where usernombre=? and userpass=?";
    $attr=array($_POST["nombre"],$_POST["contrasena"]);
    $consulta->query($sql,$attr);
    $respuesta=array();
    foreach($consulta->getResult() as $row){
        $respuesta["id"]=$row["userid"];
        $respuesta["nombre"] =$row["usernombre"];
        $respuesta["contrasena"]= $row["userpass"];
        $respuesta["estado"]=$row["estado"];
    }
    echo json_encode($respuesta);
    // echo json_encode($respuesta);
    // echo json_encode($consulta->getResult());
    // echo json_encode($consulta->getColumnAffected());

?>