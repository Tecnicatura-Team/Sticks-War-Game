<?php
include_once 'Usuario.php';
include_once 'PersonajeAliado.php';

class Jugador extends Usuario{
    private $Experiencia;
    private $PersonajesAliados;
    
    
    // CONSTRUCTOR
    
    public function __construct($U, $N, $L, $E, $PA) {
        parent::__construct($U, $N, $L);
        $this->Experiencia = $E;
        $this->PersonajesAliados=$PA;
    }
    
    // GETS
    Public Function GetExperiencia(){
        return $this->Experiencia;
    }
    
    Public Function GetPersonajesAliados(){
        return $this->PersonajesAliados;
    }
           
     //SETS
        
    Public Function SetExperiencia($E){
        $this->Experiencia = $E;
    }   

    Public Function SetPersonajesAliados($PA){
        $this->PersonajesAliados = $PA;
    }  
     
        
}
