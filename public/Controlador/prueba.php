<?php




// require_once("FuncionesPartida.php");
require_once("PartidaJS.php");
// require_once("../Modelo/class.consultas.php");
// $consultas= new Consultas();
// $idper=$_POST["personaje"];
// $dc=$_POST["dc"];
// $idper=277;
// $dc=1;
// $sql="select vidaactual from personaje where presonajeid=?";
// $consultas->query($sql,array($idper));
// $resultado=$consultas->getResult();
// if(0< ((INTEGER)$resultado) + ((INTEGER)$dc) ){
// echo "vida";
// }else{
//     echo "vida inferior a lo permitido";
// }

// session_start();
// $prueba=new Funciones();
// $prueba->cargarversus();
$prueba=new PartidaJS();
$test=$prueba->cargarPartida(4);

print_r($prueba->recargarEstaististicasPJ($test));
// print_r($prueba->recargarEstaististicasPJ($_SESSION["Partida"]));

// print_r($_SESSION["Partida"]);

// funciona afectar vida php
// require_once("../Modelo/class.consultas.php");
// $consultas= new Consultas();
// $idper=280;
// $dc=-1;
// // $idper=277;
// // $dc=-1;
// $sql="select vidaactual from personaje where presonajeid=?";
// $consultas->query($sql,array($idper));
// $resultado=$consultas->getResult();
// if(0< ((INTEGER)$resultado) + ((INTEGER)$dc)  ){
//     $vidaactual=((INTEGER)$resultado) + ((INTEGER)$dc);
//     $sql="select sum(vidamaxima) as vidamaxima from estadisticaspersonaje where personajeid=? group by personajeid";
//     $consultas->query($sql,array($idper));
//     $resultado=$consultas->getResult();
//     if(((integer)$resultado) < $vidaactual){
//         $vidaactual=(integer)$resultado;
//     }
//     $sql="update personaje set vidaactual = ? where personajeid=?";
//     $consultas->query($sql,array((integer)$resultado,$idper));
// }else{
//     $sql="update personaje set vidaactual = 0 where personajeid=?";
//     $consultas->query($sql,array($idper));
// }
// $sql="select personajepertenece from personaje where personajeid=?";
// $consultas->query($sql,array($idper));
// $iduser=(integer)$consultas->getResult();
// $sql="select personajeid, personajeposicion, vidaactual from personaje where personajepertenece=? order by personajeposicion";
// $consultas->query($sql,array($iduser));
// $resultado=$consultas->getResult();
// $res=$resultado;
// for ($i=0; $i < count($resultado); $i++) { 
//     if((integer)$resultado[$i]["vidaactual"]==0){
//         if($i+1<count($resultado)&&(integer)$resultado[$i+1]["vidaactual"]>0){
//         $sql="update personaje set personajeposicion=? where personajeid=?";
//         $consultas->query($sql,array($i+2,$resultado[$i]["personajeid"]));
//         $sql="update personaje set personajeposicion=? where personajeid=?";
//         $consultas->query($sql,array($i+1,$resultado[$i+1]["personajeid"]));
//         $res[$i]=$resultado[$i+1];
//         $res[$i+1]=$resultado[$i];
//         $resultado=$res;
//         }
//     }
// }






// require_once("../Modelo/class.consultas.php");
// $consultas= new Consultas();
// $idper=277;
// $dc=-1;
// // $idper=277;
// // $dc=-1;
// $sql="select vidaactual from personaje where presonajeid=?";
// $consultas->query($sql,array($idper));
// $resultado=$consultas->getResult();
// if(0< ((INTEGER)$resultado) + ((INTEGER)$dc)  ){
//     $vidaactual=((INTEGER)$resultado) + ((INTEGER)$dc);
//     $sql="select sum(vidamaxima) as vidamaxima from estadisticaspersonaje where personajeid=? group by personajeid";
//     $consultas->query($sql,array($idper));
//     $resultado=$consultas->getResult();
//     if(((integer)$resultado) < $vidaactual){
//         $vidaactual=(integer)$resultado;
//     }
//     $sql="update personaje set vidaactual = ? where personajeid=?";
//     $consultas->query($sql,array((integer)$resultado,$idper));
// }else{
//     $sql="update personaje set vidaactual = 0 where personajeid=?";
//     $consultas->query($sql,array($idper));
// }
// $sql="select personajepertenece from personaje where personajeid=?";
// $consultas->query($sql,array($idper));
// $iduser=(integer)$consultas->getResult();
// $sql="select personajeid, personajeposicion, vidaactual from personaje where personajepertenece=? order by personajeposicion";
// $consultas->query($sql,array($iduser));
// $resultado=$consultas->getResult();
//     $posicion = 1;
//     for ($i=0; $i < count($resultado); $i++) { 
//         if((integer)$resultado[$i]["vidaactual"]!==0){
//             $sql="update personaje set personajeposicion=? where personajeid=?";
//             $consultas->query($posicion,array($vivos,$resultado[$i]["personajeid"]));
//             $posicion++;
//         }
//     }
//     for ($i=0; $i < count($resultado); $i++) { 
//         if((integer)$resultado[$i]["vidaactual"]==0){
//             $sql="update personaje set personajeposicion=? where personajeid=?";
//             $consultas->query($sql,array($posicion,$resultado[$i]["personajeid"]));
//         $posicion++;
//         }
//     }


?>