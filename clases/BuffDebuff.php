<?php
include_once 'Efecto.php';

class BuffDebuff extends Efecto{
    private $BuffDebuffID;
    
    // CONSTRUCTOR
    
    public function __construct($O, $B) {
        parent::__construct($O);
        $this -> BuffDebuffID = $B;
    }
    
    // GETS
    Public Function GetBuffDebuffID(){
        Return $this -> BuffDebuffID;
    }
    
     //SETS
        
    Public Function SetBuffDebuffID($B){
        $this -> BuffDebuffID = $B;
    }
}
