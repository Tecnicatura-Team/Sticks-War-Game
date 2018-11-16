<?php
INCLUDE_ONCE "../Modelo/class.consultas.php";
INCLUDE_ONCE "../Modelo/Jugador.php";
INCLUDE_ONCE "../Modelo/Contrincante.php";
INCLUDE_ONCE "../Modelo/Partida.php";
INCLUDE_ONCE "../Modelo/DañoCuracion.php";
INCLUDE_ONCE "../Modelo/BuffDebuff.php";
INCLUDE_ONCE "../Modelo/Ofensiva.php";
INCLUDE_ONCE "../Modelo/Defensiva.php";
INCLUDE_ONCE "../Modelo/PersonajeAliado.php";
INCLUDE_ONCE "../Modelo/PersonajeEnemigo.php";

class Funciones{
    
    function cargarversus(){
        session_start();
        $resultado["jugador1"]=$_SESSION["usuario"]["nombre"];
        $resultado["jugador2"]=$_SESSION["Jugador2"]["usernombre"];
        echo json_encode($resultado);
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

            $habilidad= new Defensiva($resultado[0]["habilidadnombre"],$resultado[0]["direcicono"],$resultado[0]["direcimagen"],$resultado[0]["descripcion"],$this->cargarEfectos($idhabilidad));
        }else{

            $sql="select habilidadid, habilidadnombre, direcicono,direcimagen,descripcion from habilidad where habilidadid=?";
            $consultas->query($sql,array($idhabilidad));
            $resultado=$consultas->getResult();

            $habilidad= new Ofensiva($resultado[0]["habilidadnombre"],$resultado[0]["direcicono"],$resultado[0]["direcimagen"],$resultado[0]["descripcion"],$this->cargarEfectos($idhabilidad), $this->cargarObjetivosHabilidad($idhabilidad));
               
        }  
        return $habilidad;     

    }

    function cargarHabilidadesPersonaje($idclase){
        $consultas= new Consultas();
        $sql="select habilidadid from habilidad where habilidadclase=?";
        $consultas->query($sql,array($idclase));
        $resultado=$consultas->getResult();

        $habilidades=array();

        for($i=0; $i<count($resultado); $i++){
            $habilidades[]= $this->cargarHabilidad($resultado[$i]["habilidadid"]); 
        
        }
        return $habilidades;
    }
        function cargarPersonajeAliado($idpersonaje){
            $consultas= new Consultas();
            $sql="select c.claseid, c.direcimagen, p.personajeposicion from clase c, personaje p where p.personajeclase=c.claseid and p.personajeid=?";
            $consultas->query($sql,array($idpersonaje));            
            $resultado1=$consultas->getResult();

            $sql="select personajeid, sum(vidamaxima), sum(precisionn), sum(provevasion), sum(provcritico), sum(reddamage), sum(moddamage) from estadisticaspersonaje where personajeid=? group by personajeid";
            $consultas->query($sql,array($idpersonaje));            
            $resultado2=$consultas->getResult();
    
                // (VidaBase, Precision, Evasion, Critico, Resistencia, PersonajeID, VidaActual, DirImagen, Posicion, ModDaño, Habilidades)
            $personaje=new PersonajeAliado($resultado2[0]["vidamaxima"], $resultado2[0]["precisionn"], $resultado2[0]["provevasion"],
             $resultado2[0]["provcritico"],$resultado2[0]["reddamage"], $resultado2[0]["personajeid"], $resultado2[0]["vidamaxima"],
              $resultado1[0]["direcimagen"],$resultado1[0]["personajeposicion"], $resultado2[0]["moddamage"], $this->cargarHabilidadesPersonaje($resultado1[0]["claseid"]));

              return $personaje;
        }

        function cargarPersonajeEnemigo($idpersonaje){
            $consultas= new Consultas();
            $sql="select c.claseid, c.direcimagen, p.personajeposicion from clase c, personaje p where p.personajeclase=c.claseid and p.personajeid=?";
            $consultas->query($sql,array($idpersonaje));            
            $resultado1=$consultas->getResult();

            $sql="select personajeid, sum(vidamaxima), sum(precisionn), sum(provevasion), sum(provcritico), sum(reddamage), sum(moddamage) from estadisticaspersonaje where personajeid=? group by personajeid";
            $consultas->query($sql,array($idpersonaje));            
            $resultado2=$consultas->getResult();
    
                // (VidaBase, Precision, Evasion, Critico, Resistencia, PersonajeID, VidaActual, DirImagen, ModDaño, Habilidades)
            $personaje=new PersonajeEnemigo($resultado2[0]["vidamaxima"], $resultado2[0]["precisionn"], $resultado2[0]["provevasion"],
             $resultado2[0]["provcritico"],$resultado2[0]["reddamage"], $resultado2[0]["personajeid"], $resultado2[0]["vidamaxima"],
              $resultado1[0]["direcimagen"],$resultado1[0]["personajeposicion"], $resultado2[0]["moddamage"]);

              return $personaje;
        }


        function cargarJugador($usuarioid){
            //id, nombre ,level, experiencia, personajesA
            $consultas= new Consultas();
            $sql="select userid, usernivel, userexp, usernombre from usuario where userid=?";
            $consultas->query($sql,array($usuarioid));            
            $resultado1=$consultas->getResult();

            $sql="select personajeid from personaje where personajepertenece=?";
            $consultas->query($sql,array($usuarioid));            
            $resultado2=$consultas->getResult();

            $jugador=new Jugador($resultado1[0]["userid"],$resultado1[0]["usernombre"],$resultado1[0]["usernivel"],
            $resultado1[0]["userexp"],array(
                $this->cargarPersonajeAliado($resultado2[0]["personajeid"]),
                $this->cargarPersonajeAliado($resultado2[1]["personajeid"]),
                $this->cargarPersonajeAliado($resultado2[2]["personajeid"])
            ));
           return $jugador;
        }


        function cargarContrincante($usuarioid){
            $consultas= new Consultas();
            //id, nombre ,level, experiencia, personajesA
            $sql="select userid, usernivel, usernombre from usuario where userid=?";
            $consultas->query($sql,array($usuarioid));            
            $resultado1=$consultas->getResult();

            $sql="select personajeid from personaje where personajepertenece=?";
            $consultas->query($sql,array($usuarioid));            
            $resultado2=$consultas->getResult();

            $contrincante=new Contrincante($resultado1[0]["userid"],$resultado1[0]["usernombre"],$resultado1[0]["usernivel"],
            array(
                $this->cargarPersonajeEnemigo($resultado2[0]["personajeid"]),
                $this->cargarPersonajeEnemigo($resultado2[1]["personajeid"]),
                $this->cargarPersonajeEnemigo($resultado2[2]["personajeid"])
            ));
           return $contrincante;
        }

        function cargarPartida($usuarioid){
            $consultas= new Consultas();
            $sql="select partidaid as partidaid, jugador1id as jugador, jugador2id as contrincante from partida where jugador1id=? and ganadorid is null 
            union
            select partidaid, jugador2id, jugador1id from partida where jugador2id=? and ganadorid is null"; 

            $consultas->query($sql,array($usuarioid,$usuarioid));            
            $resultado=$consultas->getResult();

                
            $partida= new Partida($resultado[0]["partidaid"],$this->cargarJugador($resultado[0]["jugador"]), $this->cargarContrincante($resultado[0]["contrincante"]));
        
            return $partida;
        }


    
}
?>