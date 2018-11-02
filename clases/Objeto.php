<?php
include_once 'EstadisticasBasicas';

    class objeto extends EstadisticasBasicas{
        private $TipoObjetoID;
        private $Nombre;
        private $DirImagen;
        private $ModDaño;
        private $Calidad;
        
        // CONSTRUCTOR
        
        public function __construct($V, $P, $E, $Cr, $R, $T, $N, $Dir, $Dañ, $Cal){
            parent::__construct($V, $P, $E, $C, $R);
            $this -> TipoObjetoID = $T;
            $this -> Nombre = $N;
            $this -> DirImagen = $Dir;
            $this -> ModDaño = $Dañ;
            $this -> Calidad = $Cal;
        }
        
        // GETS
        Public Function GetTipoObjeto(){
            Return $this -> TipoObjetoID;
        }
        
        Public Function GetNombre(){
            Return $this -> Nombre;
        }
        
        Public Function GetDirImagen(){
            Return $this -> DirImagen;
        }
        
        Public Function GetModDaño(){
            Return $this -> ModDaño;
        }
        
        Public Function GetCalidad(){
            Return $this -> Calidad;
        }
        
        //SETS
        
        Public Function SetTipoObjeto($T){
            $this -> TipoObjetoID = $T;
        }
        
        Public Function SetNombre($N){
            $this -> Nombre = $N;
        }
        
        Public Function SetDirImagen($D){
            $this -> DirImagen = $D;
        }
        
        Public Function SetModDaño($D){
            $this -> ModDaño = $D;
        }
        
        Public Function SetCalidad($Cal){
            $this -> Calidad = $Cal;
        }
    }
