<?php
require_once("./Personajes.php");
class Usuario{
    private $id;
    private $nivel;
    private $exp;
    private $nombre;
    private $personajes;
    public function __construct($i,$n,$e,$no,$pe){
        $this->id=$i;
        $this->nivel=$n;
        $this->exp=$e;
        $this->nombre=$no;
        $this->personajes=$pe;
    }
    public function setId($i){
        $this->id=$i;
    }
    public function setNivel($n){
        $this->nivel=$n;
    }
    public function setExp($e){
        $this->exp=$e;
    }
    public function setNombre($n){
        $this->nombre=$n;
    }
    public function setPersonajes($p){
        $this->personajes=$p;
    }
    public function getId(){
        return $this->id;
    }
    public function getNivel(){
        return $this->nivel;
    }
    public function getExp(){
        return $this->exp;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getPersonajes(){
        return $this->personajes;
    }
}
?>