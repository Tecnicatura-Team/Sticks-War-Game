<?php
require_once("./Efectos.php");
class Habilidad{
    private $id;
    private $nombre;
    private $direcicono;
    private $direcimagen;
    private $descripcion;
    private $efectos;
    public function __construct($i,$n,$ico,$img,$des,$ef){
        $this->id=$i;
        $this->nombre=$n;
        $this->direcicono=$ico;
        $this->direcimagen=$img;
        $this->descripcion=$des;
        $this->efectos=$ef;
    }
    public function setId($i){
        $this->id=$i;
    }
    public function setNombre($n){
        $this->nombre=$n;
    }
    public function setDirecIcono($i){
        $this->direcicono=$i;
    }
    public function setDirecImagen($i){
        $this->direcimagen=$i;
    }
    public function setDescripcion($d){
        $this->descripcion=$d;
    }
    public function setEfectos($e){
        $this->efectos=$e;
    }
    public function getId(){
        return $this->id;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getDirecIcono(){
        return $this->direcicono;
    }
    public function getDirecImagen(){
        return $this->direcimagen;
    }
    public function getDescripcion(){
        return $this->descripcion;
    }
    public function getEfectos(){
        return $this->efectos;
    }
}
?>