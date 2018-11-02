<?php

class Usuario {
    private $UsuarioID;
    private $Nombre;
    private $Nivel;
    
    // CONSTRUCTOR   
    public function __construct($U, $N, $L) {
        $this -> UsuarioID = $U;
        $this -> Nombre = $N;
        $this -> Nivel = $L;
    }
    
    // GETS
    
    Public Function GetUsuarioID(){
        Return $this -> UsuarioID;
    }
    
    Public Function GetNombre(){
        Return $this -> Nombre;
    }
    
    Public Function GetNivel(){
        Return $this -> Nivel;
    }
    
    //SETS
        
    Public Function SetUsuarioID($U){
        $this -> UsuarioID = $U;
    }
    
    Public Function SetNombre($N){
        $this -> Nombre = $N;
    }
    
    Public Function SetNivel($L){
        $this -> Nivel = $L;
    }
        
}
