<?php
require_once("./Usuario.php");
class Partida{
    private $usuario1;
    private $usuario2;
    private $turno;
    public function __construct($u1,$u2,$t){
        $this->usuario1=$u1;
        $this->usuario2=$u2;
        $this->turno=$t;
    }
    public function setUsuario1($u){
        $this->usuario1=$u;
    }
    public function setUsuario2($u){
        $this->usuario2=$u;
    }
    public function setTurno($t){
        $this->turno=$t;
    }
    public function getUsuario1(){
        return $this->usuario1;
    }
    public function getUsuario2(){
        return $this->usuario2;
    }
    public function getTurno(){
        return $this->turno;
    }
}
?>