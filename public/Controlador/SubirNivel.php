<?php
require_once("../Modelo/class.consultas.php");
session_start();
require_once("./array.php");
$toutf8array= new classarray();
$consultas = new Consultas();
$userid=(integer)$_POST["usuario"];
$estado=$_POST["estado"];
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
$objeto=array();
if($exp+$exprecibida>=$exppasarnivel){
    // echo "paso";
    $sql="update usuario set userexp=?,usernivel=? where userid=?";
    $consultas->query($sql,array( ($exp+$exprecibida-$exppasarnivel) , ($nivel+1) , $userid ));
    $sql="select * from tipoobjeto";
    $consultas->query($sql,array());
    $resul=$toutf8array->utf8Arraydoble($consultas->getResult());;
    $sql="insert into objeto values(0,?,?)";
    $random=(integer)rand(1,((integer)count($resul)));
    $consultas->query($sql,array( $random , $userid));
    $objeto=$resul[$random-1];
    // echo $consultas->getColumnAffected();
}else{
    $sql="update usuario set userexp=? where userid=?";
    $consultas->query($sql,array( ($exp+$exprecibida) , $userid ));
    
}
$resultadoe=array("usuario"=>$_SESSION["usuario"]["nombre"],"objeto"=>$objeto);
echo json_encode($resultadoe,JSON_UNESCAPED_UNICODE);
// print_r($objeto);
?>