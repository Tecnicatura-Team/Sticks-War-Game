<?php
INCLUDE_ONCE "../Modelo/class.consultas.php";
INCLUDE_ONCE "../Modelo/Usuario.php";
INCLUDE_ONCE "../Modelo/Partida.php";
INCLUDE_ONCE "../Modelo/DañoCuracion.php";
INCLUDE_ONCE "../Modelo/BuffDebuff.php";
INCLUDE_ONCE "../Modelo/Ofensiva.php";
INCLUDE_ONCE "../Modelo/Defensiva.php";

class Funciones{
    
    function cargarversus(){
        session_start();
        $resultado["jugador1"]=$_SESSION["usuario"]["nombre"];
        $resultado["jugador2"]=$_SESSION["Jugador2"]["usernombre"];
        echo json_encode($resultado);
    }
    function crearclases(){
        session_start();
        $consultas= new Consultas();
        $resultado=array();

        // $sql="select partidaid from partida (jugador1id=? or jugador2id=? ) and ganadorid is null";
        
        $sql="select partidaid from partida jugador".$_SESSION["jugadorNumero"]."id=? and ganadorid is null";        
        $consultas->query($sql,array($_SESSION["usuario"]["id"]));
        $resultado=$consultas->getResult();
        
        $jugador= new Jugador($_SESSION["usuario"]["id"], $_SESSION["usuario"]["nombre"], $_SESSION["usuario"]["nivel"],$_SESSION["usuario"]["userexp"], );
        
        $usuario1= new Usuario($_SESSION["usuario"]["id"], $_SESSION["usuario"]["nombre"], $_SESSION["usuario"]["nivel"]);
        
        $usuario2= new Usuario($_SESSION["Jugador2"]["userid"], $_SESSION["Jugador2"]["usernombre"], $_SESSION["Jugador2"]["usernivel"]);
        $partida= new Partida($resultado[0], $usuario1, $usuario2);
    }

    //
    function cargarEfectos($idhabilidad){
       
        $consultas= new Consultas();
        //carga los efectos de daño/curacion
            $sql="select objetivo, minimo, maximo from danocuracionhabilidad where habilidadid=?";
            $consultas->query($sql,array($idhabilidad));
            $resultado=$consultas->getResult();

            $efectos=array();

            //array daño curacion
            for($i=0; $i<count($resultado); $i++){
                $efectos[]= new DañoCuracion( $resultado[$i]["objetivo"], $resultado[$i]["minimo"], $resultado[$i]["maximo"]);
           }            
          //carga los efectos de buff/debuff
           $sql="select objetivo, buffdebuffid from buffdebuffhabilidad where habilidadid=?";
   
           $consultas->query($sql,array($idhabilidad));
           $resultado=$consultas->getResult();            
           
           for($i=0; $i<count($resultado); $i++){
               $efectos[]= new BuffDebuff( $resultado[$i]["objetivo"], $resultado[$i]["buffdebuffid"]);
          }
           return $efectos;
               }  

    function cargarObjetivosHabilidad($idhabilidad){

        $consultas= new Consultas();

        $sql="select posicionid from objetivoshabilidad where habilidadid=?";
        $consultas->query($sql,array($idhabilidad));
        $resultado=$consultas->getResult();

        $posiciones=array();
        
        for($i=0; $i<count($resultado); $i++){
            $posiciones[]= new Posicion( $resultado[$i]["posicionid"]);
       }
        return $posiciones; 

    }
    function cargarHabilidad($idhabilidad){
        $consultas= new Consultas();
        $habilidad;

        $sql="select posicionid from objetivoshabilidad where habilidadid=?";        
        $consultas->query($sql,array($idhabilidad));
        $resultado=$consultas->getResult();

        

        if($consultas->getColumnAffected()==0){
            $sql="select habilidadid, habilidadnombre, direcicono,direcimagen,descripcion from habilidad where habilidadid=?";
            $consultas->query($sql,array($idhabilidad));
            $resultado=$consultas->getResult();

            $habilidad= new Defensiva($resultado[0]["habilidadnombre"],$resultado[0]["direcicono"],$resultado[0]["direcimagen"],$resultado[0]["descripcion"],cargarEfectos($idhabilidad));
        }else{

            $sql="select habilidadid, habilidadnombre, direcicono,direcimagen,descripcion from habilidad where habilidadid=?";
            $consultas->query($sql,array($idhabilidad));
            $resultado=$consultas->getResult();

            $habilidad= new Ofensiva($resultado[0]["habilidadnombre"],$resultado[0]["direcicono"],$resultado[0]["direcimagen"],$resultado[0]["descripcion"],cargarEfectos($idhabilidad), cargarObjetivosHabilidad($idhabilidad));
               
        }  
        return $habilidad;     

    }

    function cargarHabilidadesPersonaje($idclase){

        $sql="select habilidadid from habilidad where habilidadclase=?";
        $consultas->query($sql,array($idclase));
        $resultado=$consultas->getResult();

        $habilidades=array();

        for($i=0; $i<count($resultado); $i++){
            $habilidades[]= cargarHabilidad($resultado[$i]["habilidadid"]); 
        
        }
        return $habilidades;
    }
        function cargarPersonajesAliado($idusuario){

            $sql="select";
            $consultas->query($sql,array($idusuario));
            $resultado=$consultas->getResult();
    
            $habilidades=array();
    
            for($i=0; $i<count($resultado); $i++){
                $habilidades[]= cargarHabilidad($resultado[$i]["habilidadid"]); 
            
            }
            return $habilidades;

        }





    
}
?>