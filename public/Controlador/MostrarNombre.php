<?php
    session_start();
    if(isset($_SESSION["usuario"])){
echo json_encode($_SESSION["usuario"]);
    }else{
        echo json_encode('');
        }
    

    // echo json_encode('hola');
?>
  