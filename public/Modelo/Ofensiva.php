<?php
include_once 'HabilidadPersonaje.php';
include_once 'Posicion.php';

class Ofensiva extends HabilidadPersonaje{
    
    private  $PosicionesObjetivos;
    
    // CONSTRUCTOR
    
    public function __construct($N, $DIco, $DImg, $Des,$E, $PO) {
        parent::__construct($N, $DIco, $DImg, $Des, $E);
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
