<?php
require_once("./Habilidades.php");
class Personaje{
    private $id;
    private $nombre;
    private $direcimagen;
    private $vidamax;
    private $vida;
    private $precision;
    private $provevasion;
    private $provcritico;
    private $reddamage;
    private $moddamage;
    private $habilidades;
    public function __construct($i,$n,$dirimagen,$v,$pre,$proeva,$procri,$reddam,$h){
        $this->id=$i;
        $this->nombre=$n;
        $this->direcimagen=$dirimagen;
        $this->vidamax=$v;
        $this->vida=$v;
        $this->precision=$pre;
        $this->provevasion=$proeva;
        $this->provcritico=$procri;
        $this->reddamage=$reddam;
        $this->habilidades=$h;
    }
    public function setId($i){
        $this->id=$i;
    }
    public function setNombre($n){
        $this->nombre=$n;
    }
    public function setDirecImagen($d){
        $this->direcimagen=$d;
    }
    public function setVida($v){
        $this->vida=$v;
    }
    public function setPrecision($p){
        $this->precision=$p;
    }
    public function setProvEvasion($e){
        $this->provevasion=$e;
    }
    public function setProvCritico($c){
        $this->provcritico=$c;
    }
    public function setRedDamage($d){
        $this->reddamage=$d;
    }
    public function setModDamage($d){
        $this->moddamage;
    }
    public function setVidaMax($v){
        $this->vidamax=$v;
    }
    public function setHabilidades($h){
        $this->habilidades=$h;
    }
    public function getId(){
        return $this->id;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getDirecImagen(){
        return $this->direcimagen;
    }
    public function getVida(){
        return $this->vida;
    }
    public function getPrecision(){
        return $this->precision;
    }
    public function getProvEvasion(){
        return $this->provevasion;
    }
    public function getProvCritico(){
        return $this->provcritico;
    }
    public function getRedDamage(){
        return $this->reddamage;
    }
    public function getModDamage(){
        return $this->moddamage;
    }
    public function getVidaMax(){
        return $this->vidamax;
    }
    public function getHabilidades(){
        return $this->habilidades;
    }
}
?>