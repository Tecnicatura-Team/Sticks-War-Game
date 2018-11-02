<?php

class DañoCuracion extends Efecto {
    
    private $DañoMaximo;
    private $DañoMinimo;
    
    // CONSTRUCTOR
    
    public function __construct($O, $Max, $Min) {
        parent::__construct($O);
        $this -> DañoMaximo = $Max;
        $this -> DañoMinimo = $Min;
    }
    
    // GETS
    
    Public Function GetDañoMaximo() {
        Return $this -> DañoMaximo;
    }
    
     Public Function GetDañoMinimo() {
        Return $this -> DañoMinimo;
    }
    
    //SETS
        
    Public Function SetDañoMaximo($Max){
        $this -> DañoMaximo = $Max;
    }
    
    Public Function SetDañoMinimo($Min){
        $this -> DañoMinimo = $Min;
    }
}
