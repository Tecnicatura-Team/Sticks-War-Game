<?php
include_once 'Personaje.php';
include_once 'HabilidadPersonaje.php';

class PersonajeAliado extends Personaje{
    private $PersonajeID;
    private $ClaseID;
    private $ObjetoID;
    private $Habilidades;
    
    // CONSTRUCTOR
    
    public function __construct($ID, $D, $VM, $VA, $P, $E, $C, $R, $MD, $CID, $OID, $H) {
        parent::__construct($ID, $D, $VM, $VA, $P, $E, $C, $R, $MD);
        $this -> ClaseID = $CID;
        $this -> ObjetoID = $OID;
        $this -> Habilidades = $H;
    }
    
    // GETS
    
    Public Function GetPersonajeID(){
        Return $this -> PersonajeID;
    }
    
    Public Function GetClaseID(){
        Return $this -> ClaseID;
    }
    
     Public Function GetObjetoID(){
        Return $this -> ObjetoID;
    }
    
    Public Function GetHabilidades(){
        Return $this -> Habilidades;
    }
    
     //SETS
    
     Public Function SetPersonajeID($ID){
        $this -> PersonajeID = $ID;
    }
        
    Public Function SetClaseID($CID){
        $this -> ClaseID = $CID;
    }
    
    Public Function SetObjetoID($OID){
        $this -> ObjetoID = $OID;
    }
    
    Public Function SetHabilidades($H){
        $this -> Habilidades = $H;
    }
    
}
