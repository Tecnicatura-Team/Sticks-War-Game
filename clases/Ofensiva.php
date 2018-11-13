<?php
include_once 'Habilidad.php';
include_once 'Posicion.php';

class Ofensiva extends Habilidad{
    
    private  $PosicionesObjetivos;
    
    // CONSTRUCTOR
    
    public function __construct($N, $DIco, $DImg, $Des, $PO) {
        parent::__construct($N, $DIco, $DImg, $Des);
        $this->PosicionesObjetivos = $PO;
    }
    
    // GETS
    
    Public Function GetPosicionesObjetivos(){
        return $this->PosicionesObjetivos;
    }
    
     //SETS
        
    Public Function SetPosicionesObjetivos($PO){
        $this->PosicionesObjetivos = $PO;
    }
}
