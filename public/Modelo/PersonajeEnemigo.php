<?php
include_once 'Personaje.php';

class PersonajeEnemigo extends Personaje{
    private $PersonajeID;
    
     // CONSTRUCTOR
     
    public function __construct($VB, $P, $E, $C, $R, $VA, $D, $MD, $PID) {
        parent::__construct($VB, $P, $E, $C, $R, $PID, $VA, $D, $MD);
    }
    
    // GETS

    //SETS
      
}
