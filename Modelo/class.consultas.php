<?php
    require_once("class.conexion.php");
    class Consultas{
        private $resultado;
        private $error;
        private $columnasafectadas;
        public function getResult(){
            return $this->resultado;
        }
        public function getError(){
            return $this->error;
        }
        public function getColumnAffected(){
            return $this->columnasafectadas;
        }
        public function query($sql,$valores){
            // creando la conexion
            $modelo=new Conexion();
            $modelo->connectd();
            $conexion = $modelo->getConnect();
            // final de la creacion de la conexion
            $numero=0;
            // se conprueba si se creo la conexion
            if($conexion){
                // se comprueba que la consulta no este vacia
                if(strlen($sql)>0){
                    // se prepara la consulta sql
                    $statement=$conexion->prepare($sql);
                    // se calcula la cantidad de parametros a pasar
                    for($i=0;$i<strlen($sql);$i++){
                        $numero=($sql[$i]=="?")?$numero+1:$numero;
                    }
                    // se verifica que tenga parametros que pasar
                    if($numero>0){
                        // comprueba que la cantidad de parametros a pasar sean iguales a los pasados
                        if(count($valores)==$numero){
                            // seteando valores pasados
                            for($i=0;$i<$numero;$i++){
                                $statement->bindParam($i+1,$valores[$i]);
                            }
                            $statement->execute();
                            $this->columnasafectadas=$statement->rowCount();
                            $this->resultado=$statement->fetchAll();
                            // Consulta realizada con exito
                        }else{
                            $this->error="La cantidad de atributos para pasar y los que paso no son iguales";
                        }
                        
                    }else{
                        // devuelve el resultado de la consulta
                        $statement->execute();
                        $this->columnasafectadas=$statement->rowCount();
                        $this->resultado=$statement->fetchAll();
                        // Consulta realizada con exito
                    }
                }else{
                    $this->error="La consulta sql esta vacia";
                }
                
                // echo "Numero: ".$numero;
            }else{
                $this->error="Error en la conexion";
            }
        }
    }
?>