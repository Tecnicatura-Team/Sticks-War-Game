<?php
include_once 'Usuario.php';
include_once 'PersonajeEnemigo.php';

class Contrincante extends Usuario {
    private $Personajes;
    
    // CONSTRUCTOR
    
    public function __construct($U, $N, $L, $P){
        parent::__construct($U, $N, $L);
        $this->Personajes = $P;
    }
    
    // GETS
    
    Public Function GetPersonajesEnemigos(){
        return $this->Personajes;
    }
    
     //SETS
        
    Public Function SetPersonajesEnemigos($P){
        $this->Personajes = $P;
    }
}
