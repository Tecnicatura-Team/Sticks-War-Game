<?php
    require_once("../Modelo/class.consultas.php");
    $consulta=new Consultas();
    $sql="insert into usuario(usernivel,userexp,usernombre,userpass,estado) values(1,0,?,?,'conectado')";
    $attr=array($_POST["nombre"],$_POST["contrasena"]);
    // echo json_encode($attr);
    $consulta->query($sql,$attr);
    $resultado=array();
    $resultado["user"]=array($_POST["nombre"],$_POST["contrasena"]);
    if($consulta->getColumnAffected()>0){
        $resultado["menssage"]=true;
        echo json_encode($resultado);
    }else{
        $resultado["menssage"]=false;
        echo json_encode($resultado);
    }
?>