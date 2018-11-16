<?php
include_once "HabilidadPersonaje.php";
class Defensiva extends HabilidadPersonaje{
    
    // CONSTRUCTOR
    
    public function __construct($N, $DIco, $DImg, $Des,$E) {
        parent::__construct($N, $DIco, $DImg, $Des,$E);
    }
        
}
