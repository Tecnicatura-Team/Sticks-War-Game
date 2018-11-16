<?php
INCLUDE_ONCE "../Modelo/class.consultas.php";
INCLUDE_ONCE "../Modelo/Usuario.php";
INCLUDE_ONCE "../Modelo/Partida.php";
class Funciones{
    
    function cargarversus(){
        session_start();
        $resultado["jugador1"]=$_SESSION["usuario"]["nombre"];
        $resultado["jugador2"]=$_SESSION["Jugador2"]["usernombre"];
        echo json_encode($resultado);
    }
    function crearclases(){
        $consultas= new Consultas();
        $resultado=array();

        // $sql="select partidaid from partida (jugador1id=? or jugador2id=? ) and ganadorid is null";
        
        $sql="select partidaid from partida jugador".$_SESSION["jugadorNumero"]."id=? and ganadorid is null";
        $resultado=$consulta->getResult();
        $consultas->query($sql,array($_SESSION["usuario"]["id"]));

        
        $jugador= new Jugador($_SESSION["usuario"]["id"], $_SESSION["usuario"]["nombre"], $_SESSION["usuario"]["nivel"],$_SESSION["usuario"]["userexp"], );
        
        $usuario1= new Usuario($_SESSION["usuario"]["id"], $_SESSION["usuario"]["nombre"], $_SESSION["usuario"]["nivel"]);
        
        $usuario2= new Usuario($_SESSION["Jugador2"]["userid"], $_SESSION["Jugador2"]["usernombre"], $_SESSION["Jugador2"]["usernivel"]);
        $partida= new Partida($resultado[0], $usuario1, $usuario2);
    }
    
}
?>