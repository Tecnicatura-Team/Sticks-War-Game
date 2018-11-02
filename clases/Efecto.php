<?php

class Efecto {
    private $objetivo;
    
    // CONSTRUCTOR
    
    public function __construct($O){
        $this -> objetivo = $O;
    }
    
    // GETS
    
    Public Function GetObjetivo(){
        Return $this -> objetivo;
    }
    
     //SETS
        
    Public Function SetObjetivo($O){
        $this -> objetivo = $O;
    }
        
}
