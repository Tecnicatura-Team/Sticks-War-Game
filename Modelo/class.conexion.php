<?php
    class Conexion{
        private $con;
        private $status="Vacia";
        private $host="localhost";
        private $user="root";
        private $password="";
        private $database="test";
        public function getStatus(){
            return $this->status;
        }
        public function connect($h,$db,$u,$p){
            try{
                $this->con=new PDO("mysql: host=$h;dbname=$db",$u,$p);
                $this->status="Establecida";
            }catch(Exception $e){
                $this->status="Vacia";
                return null;
            }
        }
        public function connectd(){
            try{
                $this->con=new PDO("mysql: host=$this->host;dbname=$this->database",$this->user,$this->password);
                $this->status="Establecida";
            }catch(Exception $e){
                $this->status="Vacia";
                return null;
            }
        }
        public function setHost($h){
            $this->host=$h;
        }
        public function setDB($db){
            $this->database=$db;
        }
        public function setUser($u){
            $this->user=$u;
        }
        public function setPasswd($p){
            $this->password=$p;
        }
        public function getConnect(){
            return $this->con;
        }
        public function closeConnect(){
            $this->con=null;
            $this->status="Vacia";
        }
    }
?>