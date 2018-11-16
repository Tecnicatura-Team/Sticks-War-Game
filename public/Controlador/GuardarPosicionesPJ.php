<?php
require_once("../Modelo/class.consultas.php");
session_start();

//crea instancia de la clase consulta (una "copia")
$consultas= new Consultas();


// $_SESSION["PosicionesJugador1"]=$_POST["Jugador1"];

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
    // $idusuario1=(INTEGER)$_SESSION["usuario"]["id"];
    // $idusuario2=(INTEGER)$user2[0]["userid"];
    // $sql="insert into partida(jugador1id,jugador2id) values($idusuario1,$idusuario2)";

    $sql="insert into partida(jugador1id,jugador2id) values(".$_SESSION["usuario"]["id"].",".$user2[0]["userid"].")";
    $consultas->query($sql,array());

    // echo $_SESSION["usuario"]["id"];
    // echo $user2[0]["userid"];
    
    $sql="insert into personaje (personajeclase,objetoid,personajeposicion,personajepertenece,vidaactual) 
    values
    ((select claseid from clase where clasenombre='".$_POST["Jugador1"]["posicionPJ1"]."'),".$_POST["Jugador1"]["objeto1"].",
    1,".$_SESSION["usuario"]["id"].",(select vidamaxima from clase where clasenombre='".$_POST["Jugador1"]["posicionPJ1"]."')),

    ((select claseid from clase where clasenombre='".$_POST["Jugador1"]["posicionPJ2"]."'),".$_POST["Jugador1"]["objeto2"].",
    2,".$_SESSION["usuario"]["id"].",(select vidamaxima from clase where clasenombre='".$_POST["Jugador1"]["posicionPJ2"]."')),

    ((select claseid from clase where clasenombre='".$_POST["Jugador1"]["posicionPJ3"]."'),".$_POST["Jugador1"]["objeto3"].",
    3,".$_SESSION["usuario"]["id"].",(select vidamaxima from clase where clasenombre='".$_POST["Jugador1"]["posicionPJ3"]."'))";

//   echo $sql;
    $consultas->query($sql, array());



    //cambia el estado a "en partida" del jugador 2 (contrincante) con el cual se realizara la partida
    $sql="update usuario set estado='en partida' where usernombre=?";
    $attr=array($user2[0]["usernombre"]);
    $consultas->query($sql,$attr);
    
    //cambia el estado a "en partida" del jugador 1
    $sql="update usuario set estado='en partida' where usernombre=?";
    $attr=array($_SESSION["usuario"]["nombre"]);
    $consultas->query($sql,$attr);    
    $_SESSION["usuario"]["estado"]="en partida";

    $_SESSION["jugadorNumero"]=1;

    //envía al usuario contrincante el aviso de que están en partida
    $respuesta=array("usuario"=>$user2[0]["usernombre"], "res"=>true, "usuario2"=>$_SESSION["usuario"]["nombre"], "jugadorNumero"=>$_SESSION["jugadorNumero"]+1);
    // echo $_SESSION["usuario"]["nombre"];
    echo json_encode($respuesta);
}else{
//si no encuentra a ningún usuario en estado "buscando partida"

//el usuario local espera un contrincante
$respuesta=array("usuario"=>$_SESSION["usuario"]["nombre"], "res"=>false);
echo json_encode($respuesta);

}






// echo json_encode($_POST["Jugador1"]);

?>