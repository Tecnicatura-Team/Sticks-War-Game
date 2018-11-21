<?php


// require_once("../Modelo/class.consultas.php");
// $consultas= new Consultas();

// $sql="select personajepertenece as userid from personaje where personajeid=?";
// $consultas->query($sql,array($idper));
// $iduser=(integer)$consultas->getResult()[0]["userid"];
// $sql="select personajeid, personajeposicion, vidaactual from personaje where personajepertenece=? order by personajeposicion";
// $consultas->query($sql,array($iduser));
// $personajes=$consultas->getResult();
// $posicion = 1;
// for ($i=0; $i < count($personajes); $i++) { 
//     echo (integer)$personajes[$i]["vidaactual"]."<br>";
//     if((integer)$personajes[$i]["vidaactual"]!==0){
      
//         $sql="update personaje set personajeposicion=? where personajeid=?";
//         $consultas->query($sql,array($posicion,$personajes[$i]["personajeid"]));
//         $posicion++;
//     }
// }

// for ($i=0; $i < count($personajes); $i++) { 

//     if((integer)$personajes[$i]["vidaactual"]==0){
//         $sql="update personaje set personajeposicion=? where personajeid=?";
//         $consultas->query($sql,array($posicion,$personajes[$i]["personajeid"]));
// 	$posicion++;
//     }
// }
echo rand(1,7);
?>