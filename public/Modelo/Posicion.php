<?php

class Posicion {
    private $posicionID;
    
    // CONSTRUCTOR
    public function __construct($P) {
        $this->posicionID = $P;
    }
    
     // GETS
    
    Public Function GetPosicion(){
        return $this->posicionID;
    }
    
     //SETS
    
    Public Function SetPosicion($P){
        $this->posicionID = $P;
    }
}
