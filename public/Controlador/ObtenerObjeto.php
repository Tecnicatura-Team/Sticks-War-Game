<?php
require_once("../Modelo/class.consultas.php");
require_once("./array.php");
$toutf8array= new classarray();
session_start();
$consulta=new Consultas();


// $sql="select o.objetopertenece,u.usernombre, o.objetoid, o.objetotipo,t.nombre, t.calidad, t.buffid, t.direcimagen, bd.vidaextra, bd.precision, bd.provevasion, bd.provcritico, bd.reddamage, bd.moddamage
// FROM
// objeto o, tipoobjeto t, buffdebuff bd, usuario u 
// where o.objetotipo=t.tipoobjetoid
// and t.buffid=bd.buffdebuffid
// and o.objetopertenece=u.userid
// and u.userid=?;";

$sql="select tob.tipoobjetoid, tob.nombre, tob.descripcion, tob.direcimagen, tob.direcimagen2,tob.calidad, bd.vidaextra, bd.precision, bd.provevasion, bd.provcritico, bd.reddamage, bd.moddamage 
from tipoobjeto tob, buffdebuff bd where tob.buffid = bd.buffdebuffid and tob.tipoobjetoid in
 (select objetotipo as objetotipo from objeto where objetopertenece = ? and objetoid not in (1) union select 1 as objetotipo 
 from tipoobjeto group by objetotipo);";

$consulta->query($sql,array($_SESSION["usuario"]["id"]));
$resultado=array();
$resultado["usuario"]=$_SESSION["usuario"]["nombre"];
$resultado["objeto"]=$toutf8array->utf8Arraydoble($consulta->getResult());


echo json_encode($resultado,JSON_UNESCAPED_UNICODE);

?>