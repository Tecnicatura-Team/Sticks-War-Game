<?php
include_once 'Usuario.php';
include_once 'PersonajeAliado.php';
include_once 'Objeto.php';

class Jugador extends Usuario{
    private $Experiencia;
    private $PersonajesAliados;
    private $Objetos;
    
    // CONSTRUCTOR
    
    public function __construct($U, $N, $L, $E) {
        parent::__construct($U, $N, $L);
        $this->Experiencia = $E;
    }
    
    // GETS
    Public Function GetExperiencia(){
        return $this->Experiencia;
    }
    
    Public Function GetPersonajesAliados(){
        return $this->PersonajesAliados;
    }
    
    Public Function GetObjetos(){
        return $this->Objetos;
    }
    
     //SETS
        
    Public Function SetExperiencia($E){
        $this->Experiencia = $E;
    }   

    Public Function SetPersonajesAliados($PA){
        $this->PersonajesAliados = $PA;
    }  
    
    Public Function SetObjetos($O){
        $this->Objetos = $O;
    }   
        
}
