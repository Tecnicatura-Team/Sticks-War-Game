<?php
    require_once("../Modelo/class.consultas.php");
    
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
        $respuesta["nivel"]=$row["usernivel"];
        $respuesta["experiencia"]=$row["userexp"];
    }
    session_start();
     if($respuesta){
        if($respuesta["estado"]=="desconectado"){
            $_SESSION["usuario"]=$respuesta;
        }
       
    
     }else{
         if(!$_SESSION["usuario"]){
            $_SESSION["usuario"]=false;
         }
        
     }
     $datos=["usuario"=>$respuesta,"user"=>array($_POST["nombre"],$_POST["contrasena"])];
    //  $datos["usuario"]=array($_POST["nombre"],$_POST["contrasena"]);
    //  $datos["respuesta"]=$respuesta["nombre"]?true:false;

    // $respuesta["user"]=array($_POST["nombre"],$_POST["contrasena"]);
    // $datos["user"]=$respuesta;
    echo json_encode($datos);
    $sql="update usuario set estado='conectado'  where usernombre=? and userpass=?";
    $attr=array($_POST["nombre"],$_POST["contrasena"]);
    if($respuesta){
        if($respuesta["estado"]=="desconectado"){
            $_SESSION["usuario"]["estado"]="conectado";
            $consulta->query($sql,$attr);
        }
     }
    // echo json_encode($respuesta);
    // echo json_encode($consulta->getResult());
    // echo json_encode($consulta->getColumnAffected());

?>