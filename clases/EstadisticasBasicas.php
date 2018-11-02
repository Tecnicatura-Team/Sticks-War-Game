<?php

class EstadisticasBasicas {

    private $VidaBase;
    private $Presicion;
    private $Evasion;
    private $Critico;
    private $Resistencia;
    
    public function __construct($V, $P, $E, $C, $R){
        $this -> VidaBase = $V;
        $this -> Presicion = $P;
        $this -> Evasion = $E;
        $this -> Critico = $C;
        $this -> Resistencia = $R;
        }
    
        // GETS
        
        Public Function GetVidaExtra(){
            Return $this -> VidaExtra;
        }
        
        Public Function GetPresicion(){
            Return $this -> Presicion;
        }
        
        Public Function GetEvasion(){
            Return $this -> Evasion;
        }
        
        Public Function GetCritico(){
            Return $this -> Critico;
        }
        
        Public Function GetResistencia(){
            Return $this -> Resistencia;
            }
            
        //SET
        
        Public Function SetVidaExtra($V){
            $this -> VidaExtra = $V;
        }
        
        Public Function SetPresicion($P){
            $this -> Presicion = $P;
        }
        
        Public Function SetEvasion($E){
            $this -> Evasion = $E;
        }
        
        Public Function SetCritico($C){
            $this -> Critico = $C;
        }
        
        Public Function SetResistencia($R){
            $this -> Resistencia = $R;
        }
}


