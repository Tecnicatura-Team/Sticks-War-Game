<?php
include_once "Efecto.php";
class DañoCuracion extends Efecto {
    
    private $DañoMaximo;
    private $DañoMinimo;
    
    // CONSTRUCTOR
    
    public function __construct($O, $Max, $Min) {
        parent::__construct($O);
        $this->DañoMaximo = $Max;
        $this->DañoMinimo = $Min;
    }
    
    // GETS
    
    Public Function GetDañoMaximo() {
        return $this->DañoMaximo;
    }
    
     Public Function GetDañoMinimo() {
        return $this->DañoMinimo;
    }
    
    //SETS
        
    Public Function SetDañoMaximo($Max){
        $this->DañoMaximo = $Max;
    }
    
    Public Function SetDañoMinimo($Min){
        $this->DañoMinimo = $Min;
    }
}
