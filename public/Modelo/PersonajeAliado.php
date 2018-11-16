<?php
include_once 'Personaje.php';
include_once 'HabilidadPersonaje.php';

class PersonajeAliado extends Personaje{  
    private $ObjetoID;
    private $Habilidades;
    
    // CONSTRUCTOR
    
    public function __construct($VB, $P, $E, $C, $R, $PID, $VA, $D, $MD, $OID, $H) {
        parent::__construct($VB, $P, $E, $C, $R, $PID, $VA, $D, $MD);
        $this->ObjetoID = $OID;
        $this->Habilidades = $H;
    }
    
    // GETS
    
     Public Function GetObjetoID(){
        return $this->ObjetoID;
    }
    
    Public Function GetHabilidades(){
        return $this->Habilidades;
    }
    
     //SETS
    
    Public Function SetObjetoID($OID){
        $this->ObjetoID = $OID;
    }
    
    Public Function SetHabilidades($H){
        $this->Habilidades = $H;
    }
    
}
