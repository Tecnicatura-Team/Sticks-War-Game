<?php

class EstadisticasBasicas {

    private $VidaBase;
    private $Presicion;
    private $Evasion;
    private $Critico;
    private $Resistencia;
    
    public function __construct($V, $P, $E, $C, $R){
        $this->VidaBase = $V;
        $this->Presicion = $P;
        $this->Evasion = $E;
        $this->Critico = $C;
        $this->Resistencia = $R;
        }
    
        // GETS
        
        Public Function GetVidaExtra(){
            return $this->VidaExtra;
        }
        
        Public Function GetPresicion(){
            return $this->Presicion;
        }
        
        Public Function GetEvasion(){
            return $this->Evasion;
        }
        
        Public Function GetCritico(){
            return $this->Critico;
        }
        
        Public Function GetResistencia(){
            return $this->Resistencia;
        }
            
        //SET
        
        Public Function SetVidaExtra($V){
            $this->VidaExtra = $V;
        }
        
        Public Function SetPresicion($P){
            $this->Presicion = $P;
        }
        
        Public Function SetEvasion($E){
            $this->Evasion = $E;
        }
        
        Public Function SetCritico($C){
            $this->Critico = $C;
        }
        
        Public Function SetResistencia($R){
            $this->Resistencia = $R;
        }
}
