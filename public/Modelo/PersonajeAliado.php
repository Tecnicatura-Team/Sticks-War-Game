<?php
include_once 'Personaje.php';
include_once 'HabilidadPersonaje.php';

class PersonajeAliado extends Personaje{  
    private $Habilidades;
    
    // CONSTRUCTOR
    
    public function __construct($VB, $P, $E, $C, $R, $PID, $VA, $D, $MD, $H) {
        parent::__construct($VB, $P, $E, $C, $R, $PID, $VA, $D, $MD);
        $this->Habilidades = $H;
    }
    
    // GETS
    
    Public Function GetHabilidades(){
        return $this->Habilidades;
    }
    
     //SETS
    
    Public Function SetHabilidades($H){
        $this->Habilidades = $H;
    }
    
}
