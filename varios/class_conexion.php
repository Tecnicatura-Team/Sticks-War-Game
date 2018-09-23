<?php


class class_conexion{
private $conexion;
private $server;
private $usuario;
private $pass;

private function __construct($c, $s,$u,$p){
    $this -> server=$s;
    $this -> usuario=$u;
    $this -> pass=$p;
    $this -> conexion= mysqli.connect($s,$u,$p);
    
}

public function getconexion(){
    return $this -> conexion;
}
public function setconexion($con){
    $this -> conexion=$con;
}
public function getserver(){
    return $this -> server;
}
public function setserver($serv){
    $this -> server=$serv;
}
public function getusuario(){
    return $this -> usuario;
}
public function setusuario($usu){
    $this -> usuario=$usu;
}
public function getpass(){
    return $this -> pass;
}
public function setpass($pas){
    $this -> pass=$pas;
}

//conexion bd

public function selectdb($base){
    mysqli_selectdb($this -> conexion, $base);
}
public function query($sql){
    return mysqli_query($this -> conexion, $sql);
}

$db = new conexion('localhost','root','');
$db -> selectdb('SticksWarTest');                                //agregar nombre de la bd
$r=$db -> query('select* from usuario');        // agregar nombre de la tabla
echo '<select nombre=usuario>';

while($reg=mysqli_fetch_array($r)){
    echo '<option value='".$reg['ci']."'>'".$reg['nombre']."</option>";"
    echo '</select>'
        }
    }
?>