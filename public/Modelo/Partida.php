<?php
include_once 'Jugador.php';
include_once 'Contrincante.php';
class Partida {
    private $PartidaID;
    private $Jugador;
    private $Contrincante;
    private $Turno;
    // CONSTRUCTOR
    
    public function __construct($P, $J, $C, $T){
         $this->PartidaID = $P;
         $this->Jugador = $J;
         $this->Contrincante = $C;
         $this->Turno = $T; 
    }
    
    // GETS
    
    Public Function GetPartidaID(){
        return $this->PartidaID;
    }
       
    Public Function GetJugador(){
        return $this->Jugador;
    }
    
     Public Function GetContrincante(){
        return $this->Contrincante;
    }
    Public Function GetTurno(){
        return $this->Turno;
    }
    
    //SETS
        
    Public Function SetPartidaID($P){
        $this->PartidaID = $P;
    }
    
    Public Function SetJugador($J){
        $this->Jugador = $J;
    }
    
    Public Function SetContrincante($C){
        $this->Contrincante = $C;
    }
    Public Function SetTurno($T){
        $this->Turno = $T;
    }
            
}
