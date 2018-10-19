<?php
include_once "class_conexion.php";

public function selectdb($base){
  mysqli_selectdb($this->conexion, $base);
}
public function query($sql){
  return mysqli_query($this->conexion, $sql);
}

$db=new conexion('localhost','root','');
$db->selectdb('SticksWarTest');                               
$r=$db->query('select * from usuario');       
echo '<select nombre=usuario>';

while($reg=mysqli_fetch_array($r)){
  echo "'<option value='".$reg['ci']."'>'".$reg['nombre']."'</option>';";
  echo "'</select>'"
      }
  }
?>