<?php

class Habilidad {
    private $Nombre;
    private $DirIcono;
    private $DirImagen;
    private $Descripcion;
    
    // CONSTRUCTOR
    
    public function __construct($N, $DIco, $DImg, $Des) {
        $this->Nombre = $N;
        $this->DirIcono = $DIco;
        $this->DirImagen = $DImg;
        $this->Descripcion = $Des;
    }
    
    // GETS
    
    Public Function GetNombre(){
        return $this->Nombre;
    }
    
    Public Function GetDirIcono(){
        return $this->DirIcono;
    }
    
    Public Function GetDirImagen(){
        return $this->DirImagen;
    }
    
    Public Function GetDescripcion(){
        return $this->Descripcion;
    }
    
    //SETS
        
    Public Function SetNombre($N){
        $this->Nombre = $N;
    }
    
    Public Function SetDirIcono($DIco){
        $this->DirIcono = $DIco;
    }
    
    Public Function SetDirImagen($DImg){
        $this->DirImagen = $DImg;
    }
    
    Public Function SetDescripcion($Des){
        $this->Descripcion = $Des;
    }
}
