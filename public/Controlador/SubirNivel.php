<?php
require_once("../Modelo/class.consultas.php");
session_start();
$consultas = new Consultas();
$userid=(integer)$_POST["usuario"];
$estado=(integer)$_POST["estado"];
// $userid=6;
// $estado="ganador";
$sql="select usernivel,userexp from usuario where userid=?";
$consultas->query($sql,array($userid));
$datos=$consultas->getResult();
$nivel=(integer)$datos[0]["usernivel"];
$exp=(integer)$datos[0]["userexp"];
$exppartida=15;
$exprecibida=($estado=="ganador")?$exppartida*3:$exppartida;
$exppasarnivel=$nivel*100+300;

if($exp+$exprecibida>=$exppasarnivel){
    $sql="update usuario set userexp=?,usernivel=? where userid=?";
    $consultas->query($sql,array( ($exp+$exprecibida-$exppasarnivel) , ($nivel+1) , $userid ));
    $sql="select tipoobjetoid from tipoobjeto order by tipoobjetoid desc limit 1";
    $consultas->query($sql,array());
    $resul=$consultas->getResult();
    $sql="insert into objeto values(0,?,?)";
    $consultas->query($sql,array( rand(1,((integer)$resul[0]["tipoobjetoid"])) , $userid));
    echo $consultas->getColumnAffected();
}else{
    $sql="update usuario set userexp=? where userid=?";
    $consultas->query($sql,array( ($exp+$exprecibida) , $userid ));
}
?>