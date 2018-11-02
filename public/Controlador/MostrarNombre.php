<?php
    session_start();
    if(isset($_SESSION["usuario"]["nombre"])){
echo json_encode($_SESSION["usuario"]["nombre"]);
    }else{
        echo json_encode('');
        }
    

    // echo json_encode('hola');
?>
  