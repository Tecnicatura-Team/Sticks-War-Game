<?php
require_once("../Modelo/class.consultas.php");
session_start();

//crea instancia de la clase consulta (una "copia")
$consultas= new Consultas();


$_SESSION["PosicionesJugador1"]=$_POST["Jugador1"];

//cambia el estado del usuario a "buscando partida"
$sql="update usuario set estado='buscando partida' where usernombre=?";
$attr=array($_SESSION["usuario"]["nombre"]);
$consultas->query($sql,$attr);

//se cambia el estado de la variable sesion
$_SESSION["usuario"]["estado"]="buscando partida";

//busca los usuarios que esten buscando partida, pero que no sea el mismo usuario 
$sql="select * from usuario where estado ='buscando partida' and usernombre not in( ? );";
$attr=array($_SESSION["usuario"]["nombre"]);
$consultas->query($sql,$attr);

//$consultas->getResult() llama a la funcion getResult perteneciente a la instancia consulta
$user2=$consultas->getResult();

//si encuentra a 1 usuario o más en estado "buscando partida"
if($consultas->getColumnAffected()>0){

    $_SESSION["Jugador2"]=$user2[0];

    echo json_encode($user2[0]["usernombre"]);

    //cambia el estado a "en partida" del jugador 2 (contrincante) con el cual se realizara la partida
    $sql="update usuario set estado='en partida' where usernombre=?";
    $attr=array($user2[0]["usernombre"]);
    $consultas->query($sql,$attr);
    

    //cambia el estado a "en partida" del jugador 1
    $sql="update usuario set estado='en partida' where usernombre=?";
    $attr=array($_SESSION["usuario"]["nombre"]);
    $consultas->query($sql,$attr);    
    $_SESSION["usuario"]["estado"]="en partida";

}else{
//si no encuentra a ningún usuario en estado "buscando partida"

echo json_encode(false);
}






// echo json_encode($_POST["Jugador1"]);

?>