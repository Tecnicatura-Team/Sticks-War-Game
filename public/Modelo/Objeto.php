<?php
include_once 'EstadisticasBasicas.php';

    class objeto extends EstadisticasBasicas{
        private $TipoObjetoID;
        private $Nombre;
        private $DirImagen;
        private $ModDaño;
        private $Calidad;
        
        // CONSTRUCTOR
        
        public function __construct($V, $P, $E, $Cr, $R, $T, $N, $Dir, $Dañ, $Cal){
            parent::__construct($V, $P, $E, $C, $R);
            $this->TipoObjetoID = $T;
            $this->Nombre = $N;
            $this->DirImagen = $Dir;
            $this->ModDaño = $Dañ;
            $this->Calidad = $Cal;
        }
        
        // GETS
        Public Function GetTipoObjeto(){
            return $this->TipoObjetoID;
        }
        
        Public Function GetNombre(){
            return $this->Nombre;
        }
        
        Public Function GetDirImagen(){
            return $this->DirImagen;
        }
        
        Public Function GetModDaño(){
            return $this->ModDaño;
        }
        
        Public Function GetCalidad(){
            return $this->Calidad;
        }
        
        //SETS
        
        Public Function SetTipoObjeto($T){
            $this->TipoObjetoID = $T;
        }
        
        Public Function SetNombre($N){
            $this->Nombre = $N;
        }
        
        Public Function SetDirImagen($D){
            $this->DirImagen = $D;
        }
        
        Public Function SetModDaño($D){
            $this->ModDaño = $D;
        }
        
        Public Function SetCalidad($Cal){
            $this->Calidad = $Cal;
        }
    }
