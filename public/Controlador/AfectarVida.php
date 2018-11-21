<?php
require_once("../Modelo/class.consultas.php");
$consultas= new Consultas();
$idper=$_POST["personaje"];
$dc=$_POST["vida"];
// $idper=10;
// $dc=-50;
$sql="select vidaactual from personaje where personajeid=?";
$consultas->query($sql,array($idper));
$resultado=$consultas->getResult();
$vidaactual=((integer)$resultado[0]["vidaactual"]);

$vidaresultante=$vidaactual + $dc;

if($dc>0){
    $sql="select sum(vidamaxima) as vidamaxima from estadisticaspersonaje where personajeid=? group by personajeid";
    $consultas->query($sql,array($idper));
    $resultado=$consultas->getResult();
    $vidamaxima=((integer)$resultado[0]["vidamaxima"]);
    if($vidamaxima>$vidaresultante){
        $sql="update personaje set vidaactual = ? where personajeid=?";
        $consultas->query($sql,array($vidaresultante,$idper));
    }else{
        $sql="update personaje set vidaactual = ? where personajeid=?";
        $consultas->query($sql,array($vidamaxima,$idper));
    }
    
}else{
    
    if( $vidaresultante > 0 ){
        $sql="update personaje set vidaactual = ? where personajeid=?";
        $consultas->query($sql,array($vidaresultante,$idper));
    }else{
        $sql="update personaje set vidaactual = 0 where personajeid=?";
        $consultas->query($sql,array($idper));
    }
    
    $sql="select personajepertenece as userid from personaje where personajeid=?";
    $consultas->query($sql,array($idper));
    $iduser=(integer)$consultas->getResult()[0]["userid"];
    $sql="select personajeid, personajeposicion, vidaactual from personaje where personajepertenece=? order by personajeposicion";
    $consultas->query($sql,array($iduser));
    $personajes=$consultas->getResult();
    $posicion = 1;
    for ($i=0; $i < count($personajes); $i++) { 
        echo (integer)$personajes[$i]["vidaactual"]."<br>";
        if((integer)$personajes[$i]["vidaactual"]!==0){
          
            $sql="update personaje set personajeposicion=? where personajeid=?";
            $consultas->query($sql,array($posicion,$personajes[$i]["personajeid"]));
            $posicion++;
        }
    }
    
    for ($i=0; $i < count($personajes); $i++) { 
    
        if((integer)$personajes[$i]["vidaactual"]==0){
            $sql="update personaje set personajeposicion=? where personajeid=?";
            $consultas->query($sql,array($posicion,$personajes[$i]["personajeid"]));
        $posicion++;
        }
    }
    
}
?>