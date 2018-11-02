<?php
include_once 'Usuario.php';
include_once 'PersonajeEnemigo.php';

class Contrincante extends usuario {
    private $Personajes;
    
    // CONSTRUCTOR
    
    public function __construct($P){
        parent::__construct($U, $N, $L);
        $this -> Personajes = $P;
    }
    
    // GETS
    
    Public Function GetPersonajes(){
        Return $this -> Personajes;
    }
    
     //SETS
        
    Public Function SetPersonajes($P){
        $this -> Personajes = $P;
    }
}
