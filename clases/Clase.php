<?php

include_once 'EstadisticasBasicas.php';
include_once 'Habilidad.php';

class Clase extends EstadisticasBasicas{
    private $ClaseID;
    private $Nombre;
    private $DirIcono01;
    private $DirIcono02;
    private $Habilidades;
    
    // CONSTRUCTOR
    
    public function __construct( $V, $P, $E, $C, $R, $ID, $N, $D01, $D02, $H){
        parent::__construct($V, $P, $E, $C, $R);
        $this -> ClaseID = $ID;
        $this -> Nombre = $N;
        $this -> DirIcono01 = $D01;
        $this -> DirIcono02 = $D02;
        $this -> Habilidades = $H;

    }
    
    // GETS
    
    Public Function GetClaseID(){
        Return $this -> ClaseID;
    }
    
    Public Function GetNombre(){
        Return $this -> nombre;
    }
    
    Public Function GetDirIcono01(){
        Return $this -> DirIcono01;
    }
    
    Public Function GetDirIcono02(){
        Return $this -> DirIcono02;
    }
    
    Public Function GetHabilidades(){
        Return $this -> Habilidades;
    }
    
    //SETS
        
    Public Function SetClaseID($ID){
        $this -> ClaseID = $ID;
    }
    
    Public Function SetNombre($N){
        $this -> Nombre = $N;
    }
    
    Public Function SetDirIcono01($D01){
        $this -> DirIcono01 = $D01;
    }
    
    Public Function SetDirIcono02($D02){
        $this -> DirIcono02 = $D02;
    }
    
    Public Function SetHabilidades($H){
        $this -> Habilidades = $H;
    }
    
}
