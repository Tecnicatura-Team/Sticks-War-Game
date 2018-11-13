<?php

class Usuario {
    private $UsuarioID;
    private $Nombre;
    private $Nivel;
    
    // CONSTRUCTOR   
    public function __construct($U, $N, $L) {
        $this->UsuarioID = $U;
        $this->Nombre = $N;
        $this->Nivel = $L;
    }
    
    // GETS
    
    Public Function GetUsuarioID(){
        return $this->UsuarioID;
    }
    
    Public Function GetNombre(){
        return $this->Nombre;
    }
    
    Public Function GetNivel(){
        return $this->Nivel;
    }
    
    //SETS
        
    Public Function SetUsuarioID($U){
        $this->UsuarioID = $U;
    }
    
    Public Function SetNombre($N){
        $this->Nombre = $N;
    }
    
    Public Function SetNivel($L){
        $this->Nivel = $L;
    }
        
}
