<?php
include_once 'Personaje.php';

class PersonajeEnemigo extends Personaje{
    private $PersonajeID;
    
    public function __construct($VB, $P, $E, $C, $R, $VA, $D, $MD, $PID) {
        parent::__construct($VB, $P, $E, $C, $R, $VA, $D, $MD);
        $this->PersonajeID = $PID;
    }
    
    // GETS
    
    Public Function GetPersonajeID(){
        return $this->PersonajeID;
    }
    
    //SETS
        
    Public Function SetPersonajeID($ID){
        $this->PersonajeID = $ID;
    }
      
}
