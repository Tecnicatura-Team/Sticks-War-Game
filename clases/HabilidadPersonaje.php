<?php
include_once 'Habilidad.php';
include_once 'Efecto.php';

class HabilidadPersonaje extends Habilidad{
    private $Efectos;
    
    // CONSTRUCTOR
    
    public function __construct($N, $DIco, $DImg, $Des, $E) {
        parent::__construct($N, $DIco, $DImg, $Des);
        $this -> Efectos = $E;
    }
    
    // GETS
    
    Public Function GetEfectos(){
        Return $this -> Efectos;
    }
    
    //SETS
    
    Public Function SetEfectos($E){
        $this -> Efectos = $E;
    }
}
