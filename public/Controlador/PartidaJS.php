<?php

INCLUDE_ONCE "./array.php";
INCLUDE_ONCE "../Modelo/class.consultas.php";

class PartidaJS{

    public function cargarEfectos($idhabilidad){
       
    $consultas= new Consultas();
    //carga los efectos de daño/curacion
        $sql="select objetivo, minimo, maximo from danocuracionhabilidad where habilidadid=?";
        $consultas->query($sql,array($idhabilidad));
        $toutf8=new classarray();
        $resultado=$toutf8->utf8Arraydoble($consultas->getResult()) ;

        $efectos=array();

        //array daño curacion
        for($i=0; $i<count($resultado); $i++){
            $efectos[]= array( "Objetivo"=>$resultado[$i]["objetivo"], "Minimo"=>$resultado[$i]["minimo"], "Maximo"=>$resultado[$i]["maximo"]);
       }  

      //carga los efectos de buff/debuff
        $sql="select objetivo, buffdebuffid from buffdebuffhabilidad where habilidadid=?";
        $consultas->query($sql,array($idhabilidad));
        $toutf8=new classarray();
        $resultado=$toutf8->utf8Arraydoble($consultas->getResult()) ;          
       
       for($i=0; $i<count($resultado); $i++){
           $efectos[]=array("Objetivo"=>$resultado[$i]["objetivo"],"BuffDebuffID"=>$resultado[$i]["buffdebuffid"]);
      }
       return $efectos;
}  

public function cargarObjetivosHabilidad($idhabilidad){

    $consultas= new Consultas();

    $sql="select posicionid from objetivoshabilidad where habilidadid=?";
    $consultas->query($sql,array($idhabilidad));
    $toutf8=new classarray();
    $resultado=$toutf8->utf8Arraydoble($consultas->getResult()) ;

    $posiciones=array();
    
    for($i=0; $i<count($resultado); $i++){
        $posiciones[]=array("PosicionID"=>$resultado[$i]["posicionid"]);
   }
    return $posiciones; 

}
    public function cargarHabilidad($idhabilidad){
            $consultas= new Consultas();
            $habilidad;
    
            $sql="select posicionid from objetivoshabilidad where habilidadid=?";        
            $consultas->query($sql,array($idhabilidad));
            $toutf8=new classarray();
            $resultado=$toutf8->utf8Arraydoble($consultas->getResult()) ;   
            
            if($consultas->getColumnAffected()==0){
                $sql="select habilidadid, habilidadnombre, direcicono,direcimagen,descripcion from habilidad where habilidadid=?";
                $consultas->query($sql,array($idhabilidad));
                $resultado=$toutf8->utf8Arraydoble($consultas->getResult()) ;
    
                $habilidad= array("Nombre"=>$resultado[0]["habilidadnombre"],"Icono"=>$resultado[0]["direcicono"],"Imagen"=>$resultado[0]["direcimagen"],"Descripcion"=>$resultado[0]["descripcion"],"Efectos"=>$this->cargarEfectos($idhabilidad));
            }else{
    
                $sql="select habilidadid, habilidadnombre, direcicono,direcimagen,descripcion from habilidad where habilidadid=?";
                $consultas->query($sql,array($idhabilidad));
                $resultado=$toutf8->utf8Arraydoble($consultas->getResult()) ;
    
                $habilidad= array("Nombre"=>$resultado[0]["habilidadnombre"],"Icono"=>$resultado[0]["direcicono"],"Imagen"=>$resultado[0]["direcimagen"],"Descripcion"=>$resultado[0]["descripcion"],"Efectos"=>$this->cargarEfectos($idhabilidad), "PosicionesObjetivo"=>$this->cargarObjetivosHabilidad($idhabilidad));
                   
            }  
            return $habilidad;     
    }

        public function cargarHabilidadesPersonaje($idclase){
            $consultas= new Consultas();

            $sql="select habilidadid from habilidad where habilidadclase=?";
            $consultas->query($sql,array($idclase));
            $toutf8=new classarray();
            $resultado=$toutf8->utf8Arraydoble($consultas->getResult()) ;
    
            $habilidades=array();
    
            for($i=0; $i<count($resultado); $i++){
                $habilidades[]= $this->cargarHabilidad($resultado[$i]["habilidadid"]); 
            
            }
            return $habilidades;
        }

        public function cargarPersonajeAliado($idpersonaje){
            $consultas= new Consultas();

            $sql="select c.claseid, c.direcimagen, p.personajeposicion from clase c, personaje p where p.personajeclase=c.claseid and p.personajeid=?";
            $consultas->query($sql,array($idpersonaje));            
            $toutf8=new classarray();
            $resultado1=$toutf8->utf8Arraydoble($consultas->getResult()) ;

            $sql="select personajeid, sum(vidamaxima) as vidamaxima, sum(precisionn) as precisionn, sum(provevasion) as provevasion, sum(provcritico) as provcritico, sum(reddamage) as reddamage, sum(moddamage) as moddamage from estadisticaspersonaje where personajeid=? group by personajeid";
            $consultas->query($sql,array($idpersonaje));            
            $resultado2=$toutf8->utf8Arraydoble($consultas->getResult()) ;
    
                // (VidaBase, Precision, Evasion, Critico, Resistencia, PersonajeID, VidaActual, DirImagen, Posicion, ModDaño, Habilidades)
            $personaje=array("VidaMaxima"=>$resultado2[0]["vidamaxima"], "Precision"=>$resultado2[0]["precisionn"], "Evasion"=>$resultado2[0]["provevasion"],
            "Critico"=>$resultado2[0]["provcritico"],"Resistencia"=>$resultado2[0]["reddamage"], "ID"=>$resultado2[0]["personajeid"], "VidaActual"=>$resultado2[0]["vidamaxima"],
            "Imagen"=>$resultado1[0]["direcimagen"],"Posicion"=>$resultado1[0]["personajeposicion"],"ModificadorDaño"=> $resultado2[0]["moddamage"],"Habilidades"=>$this->cargarHabilidadesPersonaje($resultado1[0]["claseid"]));

           
              return $personaje;
        }

        public function cargarPersonajeEnemigo($idpersonaje){
            $consultas= new Consultas();
            $sql="select c.claseid, c.direcimagen, p.personajeposicion from clase c, personaje p where p.personajeclase=c.claseid and p.personajeid=?";
            $consultas->query($sql,array($idpersonaje));            
            $toutf8=new classarray();
            $resultado1=$toutf8->utf8Arraydoble($consultas->getResult()) ;

            $sql="select personajeid, sum(vidamaxima) as vidamaxima, sum(precisionn) as precisionn, sum(provevasion) as provevasion, sum(provcritico) as provcritico, sum(reddamage) as reddamage, sum(moddamage) as moddamage from estadisticaspersonaje where personajeid=? group by personajeid";
            $consultas->query($sql,array($idpersonaje));            
            $resultado2=$toutf8->utf8Arraydoble($consultas->getResult()) ;
    
                // (VidaBase, Precision, Evasion, Critico, Resistencia, PersonajeID, VidaActual, DirImagen, ModDaño, Habilidades)
            $personaje=array("VidaMaxima"=>$resultado2[0]["vidamaxima"], "Precision"=>$resultado2[0]["precisionn"], "Evasion"=>$resultado2[0]["provevasion"],
            "Critico"=>$resultado2[0]["provcritico"],"Resistencia"=>$resultado2[0]["reddamage"], "ID"=>$resultado2[0]["personajeid"], "VidaActual"=>$resultado2[0]["vidamaxima"],
            "Imagen"=>$resultado1[0]["direcimagen"],"Posicion"=>$resultado1[0]["personajeposicion"],"ModificadorDaño"=> $resultado2[0]["moddamage"]);

              return $personaje;
        }

        public function cargarJugador($usuarioid){
            //id, nombre ,level, experiencia, personajesA
            $consultas= new Consultas();
            $sql="select userid, usernivel, userexp, usernombre from usuario where userid=?";
            $consultas->query($sql,array($usuarioid));            
            $toutf8=new classarray();
            $resultado1=$toutf8->utf8Arraydoble($consultas->getResult()) ;

            $sql="select personajeid from personaje where personajepertenece=?";
            $consultas->query($sql,array($usuarioid));            
            $resultado2=$toutf8->utf8Arraydoble($consultas->getResult()) ;

            $jugador=array("ID"=>$resultado1[0]["userid"],"Nombre"=>$resultado1[0]["usernombre"],"Nivel"=>$resultado1[0]["usernivel"],
            "Experiencia"=>$resultado1[0]["userexp"],"TurnoPersonaje"=>0,"Personajes"=>array(
                $this->cargarPersonajeAliado($resultado2[0]["personajeid"]),
                $this->cargarPersonajeAliado($resultado2[1]["personajeid"]),
                $this->cargarPersonajeAliado($resultado2[2]["personajeid"])
            ));
           return $jugador;
        }

        public function cargarContrincante($usuarioid){
            $consultas= new Consultas();
            //id, nombre ,level, experiencia, personajesA
            $sql="select userid, usernivel, usernombre from usuario where userid=?";
            $consultas->query($sql,array($usuarioid));            
            $toutf8=new classarray();
            $resultado1=$toutf8->utf8Arraydoble($consultas->getResult()) ;

            $sql="select personajeid from personaje where personajepertenece=?";
            $consultas->query($sql,array($usuarioid));            
            $resultado2=$toutf8->utf8Arraydoble($consultas->getResult()) ;

            $contrincante=array("ID"=>$resultado1[0]["userid"],"Nombre"=>$resultado1[0]["usernombre"],"Nivel"=>$resultado1[0]["usernivel"],
            "Personajes"=>array(
                $this->cargarPersonajeEnemigo($resultado2[0]["personajeid"]),
                $this->cargarPersonajeEnemigo($resultado2[1]["personajeid"]),
                $this->cargarPersonajeEnemigo($resultado2[2]["personajeid"])
            ));
           return $contrincante;
        }

        public function cargarPartida($usuarioid){
            $turno;

            $consultas= new Consultas();
            $sql="select partidaid as partidaid, jugador1id as jugador, jugador2id as contrincante from partida where jugador1id=? and ganadorid is null"; 
            $consultas->query($sql,array($usuarioid));           
            // echo $consultas->getColumnAffected();
            if($consultas->getColumnAffected()==0){
                $turno="contrincante";

                $sql="select partidaid as partidaid, jugador2id as jugador, jugador1id as contrincante from partida where jugador2id=? and ganadorid is null"; 
                $consultas->query($sql,array($usuarioid));  

            }else{
                $turno="jugador";
            }
            $toutf8=new classarray();
            $resultado=$toutf8->utf8Arraydoble($consultas->getResult());                
            $partida=array("ID"=>$resultado[0]["partidaid"],"Jugador"=>$this->cargarJugador($resultado[0]["jugador"]),"Contrincante"=>$this->cargarContrincante($resultado[0]["contrincante"]),"Turno"=>$turno);
        
            return $partida;
        }

        public function recargarEstaististicasPJ($partida){   

            
            for($i=0; $i<3; $i++){

                $sql="select personajeid, sum(vidamaxima) as vidamaxima, sum(precisionn) as precisionn, sum(provevasion) as provevasion, sum(provcritico) as provcritico, sum(reddamage) as reddamage, sum(moddamage) as moddamage from estadisticaspersonaje where personajeid=? group by personajeid";
                $consultas->query($sql,array($partida["Jugador"]["Personajes"][$i]["ID"])); 

                $resultado1=$toutf8->utf8Arraydoble($consultas->getResult()) ;

                $partida["Jugador"]["Personajes"][$i]["Precision"]=$resultado1[0]["precisionn"];
                $partida["Jugador"]["Personajes"][$i]["Evasion"]=$resultado1[0]["provevasion"];
                $partida["Jugador"]["Personajes"][$i]["Critico"]=$resultado1[0]["provcritico"];
                $partida["Jugador"]["Personajes"][$i]["Resistencia"]=$resultado1[0]["reddamage"];
                $partida["Jugador"]["Personajes"][$i]["ModificadorDaño"]=$resultado1[0]["moddamage"];
                $partida["Jugador"]["Personajes"][$i]["ModificadorDaño"]=$resultado1[0]["moddamage"];
           
           
                $sql="select vidaactual, personajeposicion from personaje where personajeid =?";
                $consultas->query($sql,array($personajes[$i]->GetPersonajeID()));            
                $resultado2=$toutf8->utf8Arraydoble($consultas->getResult()) ;
           
                $partida["Jugador"]["Personajes"][$i]["Posicion"]=$resultado1[0]["personajeposicion"];
                $partida["Jugador"]["Personajes"][$i]["VidaActual"]=$resultado1[0]["vidaactual"];
           
            }

            for($i=0; $i<3; $i++){

                $sql="select personajeid, sum(vidamaxima) as vidamaxima, sum(precisionn) as precisionn, sum(provevasion) as provevasion, sum(provcritico) as provcritico, sum(reddamage) as reddamage, sum(moddamage) as moddamage from estadisticaspersonaje where personajeid=? group by personajeid";
                $consultas->query($sql,array($partida["Jugador"]["Personajes"][$i]["ID"])); 

                $resultado1=$toutf8->utf8Arraydoble($consultas->getResult()) ;

                $partida["Contrincante"]["Personajes"][$i]["Precision"]=$resultado1[0]["precisionn"];
                $partida["Contrincante"]["Personajes"][$i]["Evasion"]=$resultado1[0]["provevasion"];
                $partida["Contrincante"]["Personajes"][$i]["Critico"]=$resultado1[0]["provcritico"];
                $partida["Contrincante"]["Personajes"][$i]["Resistencia"]=$resultado1[0]["reddamage"];
                $partida["Contrincante"]["Personajes"][$i]["ModificadorDaño"]=$resultado1[0]["moddamage"];
                $partida["Contrincante"]["Personajes"][$i]["ModificadorDaño"]=$resultado1[0]["moddamage"];
           
           
                $sql="select vidaactual, personajeposicion from personaje where personajeid =?";
                $consultas->query($sql,array($personajes[$i]->GetPersonajeID()));            
                $resultado2=$toutf8->utf8Arraydoble($consultas->getResult()) ;
           
                $partida["Contrincante"]["Personajes"][$i]["Posicion"]=$resultado1[0]["personajeposicion"];
                $partida["Contrincante"]["Personajes"][$i]["VidaActual"]=$resultado1[0]["vidaactual"];
           
            }

            return $partida;
        }
      
       


}//fin clase




?>