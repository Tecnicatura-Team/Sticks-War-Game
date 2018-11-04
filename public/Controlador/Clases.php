<?php
    require_once("../Modelo/class.consultas.php");
    session_start();
    $consulta=new Consultas();
    $sql="select * from clase";
    $consulta->query($sql,array());
    $resultado=array();
    // foreach($consulta->getResult() as $row){
        // $resultado["clases"][$row["clasenombre"]]=$row;
    // }
    // $resultado["usuario"]=$_SESSION["usuario"]["nombre"];
    $resultado=array("usuario" => $_SESSION["usuario"]["nombre"],"clases"=>$consulta->getResult());
    
    echo json_encode($resultado);
?>