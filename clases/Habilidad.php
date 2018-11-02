<?php

class Habilidad {
    private $Nombre;
    private $DirIcono;
    private $DirImagen;
    private $Descripcion;
    
    // CONSTRUCTOR
    
    public function __construct($N, $DIco, $DImg, $Des) {
        $this -> nombre = $N;
        $this -> DirIcono = $DIco;
        $this -> DirImagen = $DImg;
        $this -> Descripcion = $Des;
    }
    
    // GETS
    
    Public Function GetNombre(){
        Return $this -> Nombre;
    }
    
    Public Function GetDirIcono(){
        Return $this -> DirIcono;
    }
    
    Public Function GetDirImagen(){
        Return $this -> DirImagen;
    }
    
    Public Function GetDescripcion(){
        Return $this -> Descripcion;
    }
    
    //SETS
        
    Public Function SetNombre($N){
        $this -> Nombre = $N;
    }
    
    Public Function SetDirIcono($DIco){
        $this -> DirIcono = $DIco;
    }
    
    Public Function SetDirImagen($DImg){
        $this -> DirImagen = $DImg;
    }
    
    Public Function SetDescripcion($Des){
        $this -> Descripcion = $Des;
    }
}
