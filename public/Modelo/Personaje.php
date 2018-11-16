<?php
include_once 'EstadisticasBasicas.php';

class Personaje extends EstadisticasBasicas{
    private $PersonajeID;    
    private $VidaActual;
    private $DirImagen;
    private $ModDaño;
    
    // CONSTRUCTOR
    
    public function __construct($VB, $P, $E, $C, $R, $PID, $VA, $D, $MD){
        parent::__construct($VB, $P, $E, $C, $R);
        private $PersonajeID;    
        $this->VidaActual = $VA;
        $this->DirImagen = $D;
        $this->ModDaño = $MD;
    }
    
    // GETS

    Public Function GetPersonajeID(){
        return $this->PersonajeID;
    }

    Public Function GetVidaActual(){
        return $this->VidaActual;
    }
    
    Public Function GetDirImagen(){
        return $this->DirImagen;
    }
     
    Public Function GetModDaño(){
        return $this->ModDaño;
    }
    
    //SETS

    Public Function SetPersonajeID($ID){
        $this->PersonajeID = $ID;
    }

    Public Function SetVidaActual($VA){
        $this->VidaActual = $VA;
    }
    
    Public Function SetDirImagen($D){
        $this->DirImagen = $D;
    }
    
    Public Function SetModDaño($MD){
        $this->ModDaño = $MD;
    }
}
