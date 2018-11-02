<?php
include_once 'Jugador.php';
include_once 'Contrincante.php';
class Partida {
    private $PartidaID;
    private $Jugador;
    private $Contrincante;
    
    // CONSTRUCTOR
    
    public function __construct($P, $J, $C){
         $this -> PartidaID = $P;
         $this -> Jugador = $J;
         $this -> Contrincante = $C;
    }
    
    // GETS
    
    Public Function GetPartidaID(){
        Return $this -> PartidaID;
    }
       
    Public Function GetJugador(){
        Return $this -> Jugador;
    }
    
     Public Function GetContrincante(){
        Return $this -> Contrincante;
    }
    
    //SETS
        
    Public Function SetPartidaID($P){
        $this -> PartidaID = $P;
    }
    
    Public Function SetJugador($J){
        $this -> Jugador = $J;
    }
    
    Public Function SetContrincante($C){
        $this -> Contrincante = $C;
    }
            
}
