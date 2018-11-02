<?php
include_once 'EstadisticasBasicas.php';

class Personaje extends EstadisticasBasicas{
    private $DirImagen;
    private $VidaActual;
    private $ModDaño;
    
    // CONSTRUCTOR
    
    public function __construct($VB, $P, $E, $C, $R, $VA, $D, $MD){
        parent::__construct($VB, $P, $E, $C, $R);
        $this -> VidaActual = $VA;
        $this -> DirImagen = $D;
        $this -> ModDaño = $MD;
    }
    
    // GETS
    
    Public Function GetDirImagen(){
        Return $this -> DirImagen;
    }
    
    Public Function GetVidaActual(){
        Return $this -> VidaActual;
    }
    
    Public Function GetModDaño(){
        Return $this -> ModDaño;
    }
    
    //SETS
    
    Public Function SetDirImagen($D){
        $this -> DirImagen = $D;
    }
    
    Public Function SetVidaActual($VA){
        $this -> VidaActual = $VA;
    }
    
    Public Function SetModDaño($MD){
        $this -> ModDaño = $MD;
    }
}
