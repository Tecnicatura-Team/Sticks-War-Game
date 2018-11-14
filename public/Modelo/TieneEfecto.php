<?php
include_once 'Efecto.php';
class TieneEfecto {
    private $Objetivo;
    private $Efecto;
    
    public function __construct($O, $E) {
        $this->Objetivo = $O;
        $this->Efecto = $E;
    }
    
    // GETS
    
    Public Function GetObjetivo(){
        return $this->Objetivo;
    }
    
    Public Function GetEfecto(){
        return $this->Efecto;
    }
    
    //SETS
        
    Public Function SetObjetivo($O){
        $this->Objetivo = $O;
    }
        
    Public Function SetEfecto($E){
        $this->Efecto = $E;
    }
}
